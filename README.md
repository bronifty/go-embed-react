# Tutorial
[embed react in go](https://www.youtube.com/watch?v=w_Rv_3-FF0g)

Note: Air is like nodemon and in order for hot reload to work, it can't have any errors. In this code, I commented out the API_ENDPOINT variable set with the URL, which it didn't like because it needs a type. I ran the ./dev.sh script and it worked. Then I changed the API_ENDPOINT to point to the dynamic url once Air was already started and it worked.

Note2: chmod +x ./dev.sh to change permissions on the file and get it to run