import React, { Suspense } from 'react'
// ------- library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// -------  components
import Loading from './loading';
import Layout from '../../Components/Layout';
import Error404 from '../../Components/shared/error404';


function AbzarRoutes() {

    const Blog = React.lazy(() => import('../../Pages/Blog'));
    const Home = React.lazy(() => import('../../Pages/Homepage'));
    const ShopPage = React.lazy(() => import('../../Pages/shop'));
    const CartPage = React.lazy(() => import('../../Pages/Cart'));
    const AboutPage = React.lazy(() => import('../../Pages/About-us'));
    const PaymentIndex = React.lazy(() => import('../../Pages/payment'));
    const ContactPage = React.lazy(() => import('../../Pages/Contact-us'));
    const SingleBLog = React.lazy(() => import('../../Pages/Blog/single'));
    const UserAccount = React.lazy(() => import('../../Pages/UserAccount'));
    const Singleproduct = React.lazy(() => import('../../Pages/shop/single'));
    const ShopCategory = React.lazy(() => import('../../Pages/shop/category'));
    const Error404 = React.lazy(() => import('../../Components/shared/error404'));
    const SuccessPaymentPage = React.lazy(() => import('../../Pages/payment/success'));

    const routes = [
        { path: '/', component: <Home /> },
        { path: '*', component: <Error404 /> },
        { path: '/blog', component: <Blog /> },
        { path: '/shop', component: <ShopPage /> },
        { path: '/cart', component: <CartPage /> },
        { path: '/about-us', component: <AboutPage /> },
        { path: '/blog/:id', component: <SingleBLog /> },
        { path: '/profile', component: <UserAccount /> },
        { path: '/payment', component: <PaymentIndex /> },
        { path: '/contact-us', component: <ContactPage /> },
        { path: '/shop/:category', component: <ShopCategory /> },
        { path: '/shop/product/:id', component: <Singleproduct /> },
        { path: '/payment/success', component: <SuccessPaymentPage /> },
        // { path: '/blog', children: [{ path: '/', indx: true, component: <Blog /> }, { path: '/:id', component: <SinglePost /> }] }
    ]

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            {routes.map((item, index) =>
                                <Route key={index} path={`${item.path}`} element={item.component} index={item.index} />
                            )}
                        </Routes>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default React.memo(AbzarRoutes)