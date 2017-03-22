import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import ApplicationPage from './components/application/ApplicationPage'
import PrintPage from './components/application/PrintPage'
import LoginPage from './components/login/LoginPage'
import PepiteHomePage from './components/pepite/PepiteHomePage'
import CommitteeAnswerPage from './components/pepite/Applicant/CommitteeAnswer/CommitteeAnswerPage'
import ApplicantPage from './components/pepite/Applicant/ApplicantPage'
import CguPage from './components/cgu/CguPage'
import NotFound from './components/error/NotFound'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="application/:id/print" component={PrintPage}/>
    <Route path="application(/:id)" component={ApplicationPage}/>
    <Route path="pepite" component={PepiteHomePage}/>
    <Route path="pepite/applicant" component={ApplicantPage}/>
    <Route path="pepite/committeeAnswer/:id" component={CommitteeAnswerPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="cgu" component={CguPage}/>
    <Route path="*" component={NotFound} />
  </Route>
)
