import SearchService from "./SearchService";

class SearchServiceFactory {
  createNew({ documentsFileName, indexFileName }) {
    return new SearchService({ documentsFileName, indexFileName });
  }
}

export default new SearchServiceFactory();
