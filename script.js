function generate(){
    var quotes = {
        "— Bernard M. Baruch"  : '"Be who you are and say what you feel, because those who mind don ot matter, and those who matter do not mind."',
        "— Ralph Waldo Emerson" : '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
        "— Coco Chanel" : '"The most courageous act is still to think for yourself. Aloud."',
        "— Mahatma Gandhi" : '"I will not let anyone walk through my mind with their dirty feet."',
        "— Coco Chanel" : '"A girl should be two things: who and what she wants."',
        "— Coco Chanel" : '"Dress shabbily and they remember the dress; dress impeccably and they remember the woman."',
        "— Karl Lagerfeld" :  '"Don’t sacrifice yourself too much, because if you sacrifice too much there’s nothing else you can give and nobody will care for you."',
        "— Karl Lagerfeld" :  '"Never use the word “cheap”. Today everybody can look chic in inexpensive clothes (the rich buy them too). There is good clothing design on every level today. You can be the chicest thing in the world in a T-shirt and jeans — it’s up to you."',
        "— Bill Gates" :  '"Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."',
        "— Karlie Kloss,Founder, Kode with Klossy Scholarship" :  '"I quickly came to understand that code is a superpower every young woman should be able to access. Understanding that code is the underlying (and invisible) framework of tech means that we do not have to be passive bystanders in our ever-changing digital world."',
        "— Arianna Huffington, Founder, The Huffington Post" : '"Learning to code is useful no matter what your career ambitions are."',
        "– Eleanor Roosevelt" : '"No one can make you feel inferior without your consent."',
        "— Stacy London" : '"Do not let fear or insecurity stop you from trying new things. Believe in yourself. Do what you love, and most importantly, be kind to others, even if you do not like them."',
        "- Mark Victor Hansen" :  '"Don’t wait until everything is just right. It will never be perfect. There will always be challenges, obstacles and less than perfect conditions. So what? Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident, and more and more successful."',
        "– Benjamin Spock" :  '"Trust yourself–you know more than you think you do."',
        "– Lizzo" :  '"I’m really proud of you – because life comes at you fast, and sometimes it can be so hard, but if I can make it, I know you can make it. We can make it together."'
          
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author]; 

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}