import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "a6ibd67b",
  dataset: 'production',
  apiVersion: 'v1',
  token: "sksRpMhKIzOkQfVcc3EHMeITYia4VfiIMER2rk6xdYr4wcSR13GllPIUa9Gljmwiyxx6TTaQDxT1woh8OYCL1TU7nVd3h0kgFoeXo66Xbz4BlpFc3D6X0JYmOBNM3QRgisNoovh2KvMRqNdbe68FJzWxk25sl9V9A5n31fplmkkNPHddnP6s",
  useCdn: false,
})