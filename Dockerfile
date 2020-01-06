# Any base image has nodejs installed
FROM ACCOUNTID.dkr.ecr.ap-southeast-2.amazonaws.com/BASEIMAGE

ENV PORT=3000

EXPOSE $PORT

# 'COPY node_modules /app/' will cause an error saying request module not found, not sure why
COPY . /app/

CMD ["node", "/app/app.js"]