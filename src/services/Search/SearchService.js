import lunr from 'lunr';
import groupBy from 'helpers/groupBy';

export default class SearchService {

    constructor({documentsFileName, indexFileName}) {

        this.documentsLoaded = false;
        this.documentsFileName = documentsFileName;
        this.indexFileName = indexFileName;
    }

    async ensureDocumentsAndIndexLoadedAsync() {

        if(this.documentsLoaded) {
            return;
        }

        const [documents,
            index] = await Promise.all([
            (await fetch(this.documentsFileName)).json(),
            (await fetch(this.indexFileName)).json()
        ]);

        this.index = lunr
            .Index
            .load(index);

        this.documents = documents;
        this.allDocumentsGroupedByCategory = groupBy(Object.values(this.documents), 'category');

        this.documentsLoaded = true;
    }

    getAllDocumentsAsync = async() => {

        await this.ensureDocumentsAndIndexLoadedAsync();
        return this.allDocumentsGroupedByCategory;
    }

    searchByPrefixAsync = async(queryTerm) => {

        if (!queryTerm) {
            return;
        }

        await this.ensureDocumentsAndIndexLoadedAsync();

        const result = this
            .index
            .search(`${queryTerm}^100 ${queryTerm}*^10`);

        if (result && result.length > 0) {
            return groupBy(result.map(item => this.documents[item.ref]), 'category');
        }

    }
}