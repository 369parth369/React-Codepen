import React from 'react'

import { Box } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import styled from '@emotion/styled'

const Heading = styled(Box)`
height: 37vh
`

const Result = () => {
            // we have html,css,js.. we have to combined all and give html file combining alllike .html filr

            const [src, setSrc] = useState(''); // to fetch data 

            const {html, css, js} = useContext(DataContext);

            const srcCode = `
                <html>
                    <body>${html}</body>
                    <style>${css}</style> 
                    <script>${js}</script> 
                </html>
            `
        // when u want to run piece of code when any part or unmount(releasing) from DOM
            useEffect(() => {
               const timeout = setTimeout(() => {
                    setSrc(srcCode);
                }, 1000)

                return() => clearTimeout(timeout);
                
            }, [html, css, js]
            // in [] array dependency when changes happen thewn update
            // setTimeout = we can not manipulate DOM data constantly.. for that reason
            )

  return (
   <Heading>
        <iframe
            srcDoc={src}
            title='output'
            sandbox='allow-scripts'
            frameBorder={0} // depricated but 0 will not give border
            width="100%"
            height="100%"
        />
   </Heading>
  )
}

export default Result

