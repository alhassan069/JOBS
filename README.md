# API's for different purposes

Port used: 2369

1. To get city with matched skill

GET "/cs/:city/:skill"
example: http://localhost:2369/cs/Japan/Wellbeing

2. To get all jobs with work from home option

GET "/wfh"
example: http://localhost:2369/wfh

3. To get all jobs with 2 month notice period

GET "/notice"
example: http://localhost:2369/notice


3. To get all jobs in sorted order wrt ratings

GET "/sortRatings"
example: http://localhost:2369/sortRatings

4. To get details of a company by name

GET "/details/:name"
example: http://localhost:2369/details/:name


4. To get companies with most jobs

GET "/mostJobs"
example: http://localhost:2369/mostJobs
