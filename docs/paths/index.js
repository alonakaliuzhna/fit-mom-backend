const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const getAllProducts = require('./getAllProducts');
const addDiaryEntry = require('./addDiaryEntry');
const removeDiaryEntry = require('./removeDiaryEntry');
const countCaloriesPublic = require('./countCalories-public');
const countCaloriesPrivate = require('./countCalories-private');
const getStatsByDay = require('./getStatsByDay');
const getUnhealthyProducts = require('./getUnhealthyProducts');

module.exports = {
  paths: {
    '/users/register': { ...registerUser },
    '/users/login': { ...loginUser },
    '/users/logout': { ...logoutUser },
    '/users/current': { ...getCurrentUser },
    '/users/calculator': { ...countCaloriesPrivate },
    '/products': { ...getAllProducts },
    '/products/unhealthy': { ...getUnhealthyProducts },
    '/days': { ...addDiaryEntry },
    '/days/{day}': { ...getStatsByDay },
    '/days/{diaryId}': { ...removeDiaryEntry },
    '/public/calculator': { ...countCaloriesPublic },
  },
};
