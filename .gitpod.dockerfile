FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 learnpack@0.1.17 -g && learnpack plugins:install learnpack-react@0.0.18
