const CHEAT_SHEET_DOCUMENTS_FILE_SUFFIX = '-cheat-sheet.json';
const CHEAT_SHEET_INDEX_FILE_SUFFIX = '-cheat-sheet-index.json';

const cheatSheetConfig = {
        sidebar: {
            title: 'The awesome git cheat sheet',
            mainContent: `Whether you are new to git or just needing a referesher, 
            this cheat sheet will help you discover or remember useful git commands.`,
            logoUrl: `/logo.png`
        },
        search: {
            inputLabel: 'The awesome git cheat sheet',
            inputDescription: 'Just type in any git related stuff'
        },
        data: {
            documents: `/git${CHEAT_SHEET_DOCUMENTS_FILE_SUFFIX}`,
            index: `/git${CHEAT_SHEET_INDEX_FILE_SUFFIX}`
        }

}

export default cheatSheetConfig;