import '@/styles/globals.css'
import Head from "next/head"
import type { NextComponentType } from "next"
import type { AppProps } from 'next/app'
import { FC, Fragment } from "react"

import { NextIntlProvider } from "next-intl";
type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "../context/auth/auth_provider";

// const
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 36000,
    },
  },
});

/*export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}*/
export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout
    ? Component.Layout
    : Fragment;

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Head>
            <title>CTickets</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Layout>
            {/* <style jsx global>
              {`
                *,
                html,
                body {
                  font-family: "PP Neue Montreal";
                }
              `}{" "}
            </style> */}
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={true} />
        </AuthProvider>
      </QueryClientProvider>
    </NextIntlProvider>
  );
}

