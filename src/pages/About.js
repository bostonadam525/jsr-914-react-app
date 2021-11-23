import React from 'react';

export default function About() {
    return (
        <div 
        style={{ 
            fontSize: '20px', fontWeight: 'bold',
            fontFamily: 'Droid Serif',
            color: 'black',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x',
            textAlign: 'left',
            paddingTop: 50,
            paddingLeft: 30,
            
            backgroundImage: `url("https://monkeylearn.com/static/552072bf8d808110b400df80133d870a/4394e/normal.webp")`
             }} className='panel panel-default homepage'>
                 <h1><strong>About</strong></h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <p>Have you ever felt like today's news is full of "Negative" headlines? 
    Well, now you can sample the sentiment of
                any news story with this NEWS SENTIMENT ANALYSIS APP! Using
                Natural Language Processing (NLP) techniques you can easily
                screen the text of any news 
                headline or story and the machine learning algorithm will tell you whether it is:
                <ul>
                    <li>"Positive" ("1")</li>
                    <li>"Neutral" ("0")</li>
                    <li>"Negative" ("-1")</li>
                    <li>"Anywhere in between!</li>
                </ul>
            </p>
        </div>
    )
}