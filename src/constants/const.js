const SEARCH_OPTIONS = ['HTML/CSS', 'JavaScript', 'PHP/Laravel/DB/SQL', 'Python', 'Web Design', 'BlockChain', 'Others']

const BOOK_TABLE = {
    title: '',
    description: '',
    borrowable: true,
    createdAt: 'timestamp',
    owner: 'owner_id',
    review: {},
    log: { bookId: boolean },
    imageUrl: ''
}

const USER_TABLE = {
    name: '',
    picUrl: '',
    log: { bookId: 'boolean' }
}

const REVIEW_TABLE = {}

const OWNER_TABLE = {}
