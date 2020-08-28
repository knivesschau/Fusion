import React, {Component} from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <section className="Landing_Page">

                <header role="banner">
                    <h1 id="app-title">Fusion</h1>
                    <h2 id="title-tag">Let Your Inner Chef Out!</h2>
                </header>

                <div className="Intro_Tagline">
                    <h3 id="pitch1">Let's Get Cooking!</h3>

                    <p id="tagline1">
                        Let your inner chef out! Fusion is an online recipe book tailor-made for chefs at all levels, 
                        allowing them to create and save recipe modifications, substitutions, and tweaks to their favorite culinary dishes.
                    </p>
                </div>

                <div className="Second_Tagline">
                    <h3 id="pitch2">Fusion Made Easy</h3>

                    <p id="tagline2">
                        Want to adjust the measurements of a dish or use ingredients from another cooking style? 
                        Fusion makes it easy! Fuse and experiment with 10 starter recipes across 5 delicious cuisines and save your 
                        modifications to your personal recipe book. Who knew cooking could be so much fun?
                    </p>
                </div>

                <div className="Third_Tagline">
                    <h3 id="pitch3">Chef on the Go</h3>

                    <p id="tagline3">
                        Whether you're on your phone or computer, Fusion allows you to view all of your culinary creations anytime, anywhere. 
                        Fuse, modify, and edit your recipes from your test kitchen or at your desk.
                    </p>
                </div>

            </section>
        );
    };
};