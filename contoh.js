import http from "k6/http";
import { sleep } from "k6";

export const options ={
    vus: 1, // 1 user looping for 1 minute
    duration: "1m",
    threshold: {
        http_req_duration: ["p(99)<150"], // 99% of request must complete below 1.5 s
    },
};

export default function () {
    http.get("https://v2starter.putraprima.id/");
    sleep(1);
}