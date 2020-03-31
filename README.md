# RecipeBook
An application built to create and save your recipes and order the ingredients needed 


## DEMO

https://recipe-book-bff26.firebaseapp.com/

## FIREBASE RULES FOR QUERY AND AUTHENTICATION

            {
        "rules": {
            "ingredients":{
                ".read": "true",
                ".write":"true"
            },
            "orders":{
                ".read": "auth!=null",
                ".write":"auth!=null",
                ".indexOn":["userId"]
            }
        }
        }

## Technology Stack

    Angular 8
    Observables
    RxJS
    NgStore
    Firebase
