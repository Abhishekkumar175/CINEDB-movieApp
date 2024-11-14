import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2UzZGIyNjNmOTRiMWFmZDIyMjFiMzdhZjBhYWI0NyIsIm5iZiI6MTczMTAzNzY1NC45OTI0Nzg0LCJzdWIiOiI2NzJkODVmZGYyODgwZDEwMDRmNmFjM2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EJ6mcoFYHSP_KWaZ7nxbxd7j-6YQU7xWrQd_Fhrj-Bg'
      },
});

export default instance;
