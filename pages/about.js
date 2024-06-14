import Nav from '../components/Nav'



export default () => {
    return(
     <>
         
        
            <Nav></Nav>
            <div className='h-screen w-full flex flex-col justify-start items-end p-4 mt-28 text-black'>
                <h1 className='font-bold text-black text-3xl '>من نحن ؟</h1>
                <p className='text-black mt-2 text-end'>نحن مكتب استقدام أيدي عاملة رسمي مصرح به من قبل سوق العمل البحريني </p>
                <p className='text-black p-1 font-bold my-1  rounded-lg text-end'>"LMRA" </p>
                <p className='text-black  text-end'> نلتمس احتياجات العملاء  وخصوصاً الأمهات الكبيرات في السن والأمهات الموظفات ونقدر حاجتهم للعمالة المنزلية ونبحث عن  الأفضل  والمساهمة في توفير الراحة المجتمعية لكل الفئات والوصول الى النتيجة المرجوة لكل الأطراف</p>
           

                <h1 className='font-bold text-black text-3xl mt-3'> شعاراتنا </h1>
                    <ul className=' text-right ltr '>
                        <li dir='rtl' className='text-black text-lg'>1. الثقة والمصداقية في التعامل</li>
                        <li dir='rtl' className='text-black text-lg'>2. انتقاء أفضل العاملات من أفضل المناطق</li>
                        <li dir='rtl' className='text-black text-lg'>3. سرعة الإنجاز</li>
                        <li dir='rtl' className='text-black text-lg'>4. راحتكم ورضاكم هو غايتنا</li>
                    </ul>
                <h1 className='font-bold text-black text-3xl mt-3'> رؤيتنا </h1>
               <p className='text-black mt-2 text-end'>أن نصبح الخيار الأول للأفراد في استقدام العمالة المنزلية</p>
                <h1 className='font-bold text-black text-3xl mt-3'> رسالتنا </h1>
               <p className='text-black mt-2 text-end'>تتلخص في راحة العميل وتوفير ما يناسبه من العمالة المنزلية بشروطه الخاصة وانتهاج أفضل أساليب العمل من أجل تحقيق رؤيتنا وأهدافنا والسعي دوما لراحة العميل ورضاه </p>
                <h1 className='font-bold text-black text-3xl mt-3'> اهدافنا </h1>
                <p className='text-black mt-2 text-end'>راحة الأمهات والكبار في السن ومساعدة الموظفات والأمهات العاملات على استقدام العاملات الماهرات في أعمال المنزل والطباخات والمربيات وكل ما تحتاجونه </p>
            </div>
     </>
    )
}