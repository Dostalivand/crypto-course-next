import React from 'react'
import SectionHeader from '@/app/components/SectionHeader'
import ArticleBox from '@/app/components/ArticleBox'
import { GrArticle } from "react-icons/gr";
import articlePhoto1 from '@/app/Images/articlePhoto-1.jpeg'
import articlePhoto2 from '@/app/Images/articlePhoto-2.jpeg'
import articlePhoto3 from '@/app/Images/articlePhoto-3.jpeg'


export default function Article() {
    return (
        <>
            <div className='px-4'>
                <SectionHeader
                    title='آخرین مقاله ها'
                    btn='true'
                    btntitle='مشاهده مقاله ها'
                    icons={<GrArticle />}
                />
                <div className='container flex items-center justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                        <ArticleBox
                            articlePhoto={articlePhoto3}
                            title="نحوه استخراج بیت کوین چگونه است؟"
                        />
                        <ArticleBox
                            articlePhoto={articlePhoto2}
                            title="دامیننس بیت کوین چیست؟ و اهمیت آن؟"
                        />
                        <ArticleBox
                            articlePhoto={articlePhoto1}
                            title="انواع روش‌های نگهداری بیت‌ کوین"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
