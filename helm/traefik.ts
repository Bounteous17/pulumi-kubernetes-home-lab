import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Chart("traefik", {
  chart: "traefik",
  version: "23.1.0",
  fetchOpts: {
    repo: "https://traefik.github.io/charts",
  },
});

