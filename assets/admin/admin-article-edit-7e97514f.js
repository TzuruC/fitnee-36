import"../main-823c48ba.js";import{a as o}from"../config-afd6d7d3.js";const t=new URLSearchParams(window.location.search);t.get("id");axios.get(`${o}/articles`).then(function(a){a.data}).catch(function(a){console.log(a)});
