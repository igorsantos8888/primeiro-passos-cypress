import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
/* import { Chance } from 'chance' */

const Chance = require('chance')
var chance = new Chance()

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const myInfo = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.dashboard()

    myInfo.accessMyInfoPage()
    myInfo.myInfoUpdateUser(chance.first(), chance.last(), chance.prefix(), chance.sentence({ words: 1 }), chance.integer({ min: 1000, max: 10000 }), chance.integer({ min: 1000, max: 10000 }), '2025-03-26')
    myInfo.myInfoPageSave()
  })
})

