FROM node:18 AS build

WORKDIR /App

COPY . ./

RUN npm install

RUN npm run build


FROM mcr.microsoft.com/dotnet/runtime:6.0-alpine

WORKDIR /App
COPY --from=build /App/out .

ENTRYPOINT ["dotnet", "OrderServiceBot.dll"]

