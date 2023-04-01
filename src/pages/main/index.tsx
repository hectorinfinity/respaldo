import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}


export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default,
      },
    };
  }
  
export default index
