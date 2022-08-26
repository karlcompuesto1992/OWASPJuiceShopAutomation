# QA Automation Solution

> This repository contains the solution for the given exam.

## Cypress Exercise

To give an overview to the solution, basically I followed the Page Object model in creating the automation test. You can navigate on the pages folder to check each pages used in doing the test and its correspoding properties. At the same time I divided each task to 3 different test cases. 

1. TC_001.js = User successfully logs-in, add new address and purchase 1 item.
2. TC_002.js = User successfully logs-in, add new address and purchase 2 items.
3. TC_003.js = User verifies if search functionality is working as expected.


**Note:** You might encounter some errors when running the automation script. When this happen just click the referesh button on the Cypress runner to re-run the script


## Integration Exercise

To fully utilize the solution, I would suggest to import it on POSTMAN and do the testing there.

Created 4 basic command which address the requirement
1. POST Login/Authentication
2. POST Add Item to Basket
3. GET Get Orders from Basket
4. DEL Delete Item from Basket

Basically to use this, first you must import the collection on Postman. Once its done, run the POST Login/Authentication first before running the other test. 
