import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <div className="container mx-auto px-4 py-8">
                {/* Highlights Section */}
                <section className="text-center my-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Explore Our Highlights</h2>
                    <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover trending topics, inspiring stories, and curated insights just for you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {[
                            { title: 'Inspiring Stories', desc: 'Dive into real-life stories that motivate.', icon: '📖' },
                            { title: 'Expert Tips', desc: 'Learn from professionals in various fields.', icon: '💡' },
                            { title: 'Trending Topics', desc: 'Stay updated with the latest trends.', icon: '🔥' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition">
                                <span className="text-4xl">{item.icon}</span>
                                <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Articles Section */}
                <section className="my-16">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {[
                            {
                                title: 'How to Stay Productive',
                                desc: 'Learn key strategies to boost your productivity.',
                                img: '../../assets/img/productive.jpg',
                            },
                            {
                                title: 'The Future of Technology',
                                desc: 'Explore cutting-edge innovations shaping the world.',
                                img: '../../assets/img/future-technology.jpg',
                            },
                            {
                                title: 'Balancing Work & Life',
                                desc: 'Practical tips to find harmony in daily life.',
                                img: '../../assets/img/Work-life-balance.jpeg',
                            },
                        ].map((article, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white">
                                <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="text-lg font-bold text-gray-800">{article.title}</h4>
                                    <p className="text-gray-600 mt-2">{article.desc}</p>
                                    <Link
                                        to="/articles"
                                        className="inline-block mt-4 text-blue-600 hover:underline">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    );
};

export default HomePage;
