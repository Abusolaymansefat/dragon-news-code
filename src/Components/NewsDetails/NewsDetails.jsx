import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RighAside from '../HomeLayout/RighAside/RighAside';
import NewsDetailsCard from '../NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
// import { id } from 'date-fns/locale';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setnews] = useState({})
    // console.log(data, id, news)


    useEffect(() => {
        const NewsDetails = data.find((singleNews) => singleNews.id == id)
        setnews(NewsDetails)
    }, [data, id])
    return (
        <div>
            <header className='py-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6 p-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;