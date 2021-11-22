import {Box, Heading} from '@chakra-ui/layout'
import type {NextPage} from 'next'
import Head from 'next/head'
import React from 'react'
import BreadcrumbComponent from '../../components/Breadcrumb'
import {getTitle} from '../../utils/getTitle'
import {Address} from "./delivery/address";
import {PaymentMethod} from "./delivery/paymentMethod";

const Payment: NextPage = () => {
    return (
        <main>
            <Head>
                <title>{getTitle('Doprava a platba')}</title>
            </Head>

            <Box p={4}>
                <BreadcrumbComponent items={['index', 'cart-payment']}/>
                <Heading>Doprava a platba</Heading>
                <Address/>
                <PaymentMethod totalAmount={123}/>
                <Box style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '60%', padding: '0 2rem', display: 'flex', justifyContent: 'flex-end'}}>
                        <a href="https://nakupuj-app.vercel.app/" style={{padding: '15px 32px', border: 'none', backgroundColor: '#EDF2F7', borderRadius: '5px'}}>Dokončit nákup</a>
                    </div>
                </Box>
            </Box>
        </main>
    )
}

export default Payment
