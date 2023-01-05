import Nav from '../components/Nav'

export default () => {
    return(
     <>
         
        
            <Nav></Nav>
            <div className='h-screen w-full flex flex-col justify-start items-end p-4 mt-28'>
                <h1 className='font-bold text-white text-3xl '>من نحن ؟</h1>
                <p className='text-white mt-2 text-end'>نحن مكتب فراغ فراغ عاملة رسمي مصرح به من قبل سوق العمل البحريني </p>
                <p className='text-black p-1 font-bold my-1 bg-white rounded-lg text-end'>"LMRA" </p>
                <p className='text-white  text-end'> نلتمس احتياجات العملاء وخصوصا الامهات الكبيرات في السن والامهات الموضفات ونقدر حاجتهم للعنالة النزلية ونبحث عن  الافضل  والمساهمة في توفير الراحة المجتمعة لكل الفئات والوصول الى النتيجة المرجوة لكل الاطراف</p>
           

                <h1 className='font-bold text-white text-3xl mt-3'> شعاراتنا </h1>
                    <ul className=' text-right ltr '>
                        <li dir='rtl' className='text-white text-lg'>1. الثقة والمصداقية</li>
                        <li dir='rtl' className='text-white text-lg'>2. انتقاء افضل العاملات من افضل المناطق</li>
                        <li dir='rtl' className='text-white text-lg'>3. سرعة الانجاز</li>
                        <li dir='rtl' className='text-white text-lg'>4. راحتكم ورضاكم هو غايتنا</li>
                    </ul>
                <h1 className='font-bold text-white text-3xl mt-3'> رؤيتنا </h1>
                <p>ان نصبح الخيار الاول في ا</p>
               
            </div>
        
       
     </>
    )
}