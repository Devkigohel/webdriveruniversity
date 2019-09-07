$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Portal",
  "description": "\r\nTests around validating login portal",
  "id": "login-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-portal;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user should be prompted with the following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-portal;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 24,
      "id": "login-portal;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/",
        "webdriver",
        "webdriver",
        "validation failed"
      ],
      "line": 25,
      "id": "login-portal;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 26,
      "id": "login-portal;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5928752500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-portal;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"http://www.webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"webdriver\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user should be prompted with the following prompt alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/",
      "offset": 19
    }
  ],
  "location": "Practicesteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1343591700,
  "status": "passed"
});
formatter.match({
  "location": "Practicesteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 401000200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "Practicesteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2147415700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "Practicesteps.user_enters(String)"
});
formatter.result({
  "duration": 34960700,
  "status": "passed"
});
formatter.match({
  "location": "Practicesteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 65669800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 61
    }
  ],
  "location": "Practicesteps.the_user_should_be_prompted_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 41514100,
  "status": "passed"
});
formatter.after({
  "duration": 4786781500,
  "status": "passed"
});
formatter.before({
  "duration": 4043401400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-portal;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"http://www.webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"webdriver123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user should be prompted with the following prompt alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/",
      "offset": 19
    }
  ],
  "location": "Practicesteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1095623900,
  "status": "passed"
});
formatter.match({
  "location": "Practicesteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 386706200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "Practicesteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2153989300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 13
    }
  ],
  "location": "Practicesteps.user_enters(String)"
});
formatter.result({
  "duration": 39958200,
  "status": "passed"
});
formatter.match({
  "location": "Practicesteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 45759400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 61
    }
  ],
  "location": "Practicesteps.the_user_should_be_prompted_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 38277300,
  "status": "passed"
});
formatter.after({
  "duration": 4677318300,
  "status": "passed"
});
});