import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Chart("cert-manager", {
  chart: "cert-manager",
  version: "1.15.3",
  fetchOpts: {
    repo: "https://charts.jetstack.io",
  },
  values: {
    installCRDs: true
  }
});

