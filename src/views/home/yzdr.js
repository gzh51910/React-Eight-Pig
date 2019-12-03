import React, { Component } from 'react';
import '../../common/css/home/homeyzdr.scss'
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import { my } from '../../api'
import Lazyload from 'r-img-lazyload';
import imgURL from '../../common/img/home/loading.jpg';
class homeyzdr extends Component {
    state = {
        list: [

        ]
    }
    async componentDidMount() {
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "expert"
        });

        this.setState({
            list: data
        })

    }
    goto = (id) => {
        let { history } = this.props;
        history.push(`/yzdr/${id}`)
        console.log(this.props);
    }
    render() {
        const config = {
            options: {

                loading: imgURL
            },
        };
        return (
            <div className="homeyzdr">
                <div className="titleBox">
                    <h1 className="title">优质达人</h1>
                    <span>更多
                    <Icon type="right" />
                    </span>
                </div>
                <article className="g-list-wrap">
                    <ul className='g-list'>
                        {this.state.list.map(item => {
                            return <figure key={item.src} onClick={this.goto.bind(this, item._id)}>

                                <Lazyload src={item.src} {...config} />

                                <span className="g-tag">{item.tag}</span>
                                <figcaption>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                </figcaption>
                            </figure>
                        })}
                    </ul>
                </article>
                <div className="feature">
                    <ul className="feature-list">
                        <li>
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="home_safe"><path d="M621.696 414.464L496.832 536.96l-22.4 8.256-55.36-49.472s-18.816-15.36-24.704-15.744-15.296-5.312-18.816 0a304 304 0 0 0-12.8 30.592l10.432 26.752 33.152 38.4 45.952 41.216 11.776 10.624h28.096l90.688-81.28L635.84 486.4s29.056-48.256 41.216-40.064 10.624-18.816 11.776-22.4-5.888-17.664-5.888-17.664-17.664-17.664-22.4-17.664-38.848 25.856-38.848 25.856z" fill="#E95D66"></path><path d="M424.96 480.896a47.104 47.104 0 1 0-66.56 66.624l85.504 85.568a47.104 47.104 0 0 0 66.624 0L689.152 454.4a47.104 47.104 0 0 0-66.624-66.56l-145.28 145.28zm218.048-72.576a18.112 18.112 0 1 1 25.6 25.6l-178.56 178.624a18.176 18.176 0 0 1-25.6 0L378.88 527.04a18.112 18.112 0 0 1 25.6-25.6l62.72 62.4a14.464 14.464 0 0 0 20.48 0z" fill="#11344D"></path><path d="M889.6 152.064s-70.4-1.088-88.896-8.32-208.32-62.464-208.32-62.464l-50.432-43.2L512.704 32 301.888 136 134.4 151.424l8.128 397.44 34.24 157.568s31.232 73.536 43.2 80.704 72.64 89.152 72.64 89.152l133.12 98.496 97.728 29.056 70.976-36.672 122.432-85.248L820.096 755.2l55.552-169.664L889.6 422.4zm-104.896 275.2l-11.392 163.904L720.96 726.08l-71.04 88.32-125.888 85.12h-35.584L377.472 820.8l-90.816-110.912-42.432-131.648-16.768-196.864 8.448-140.8 123.584-22.656 156.416-70.72 65.472 37.312 108.288 34.624 96.768 26.624s-1.856 40.704 5.312 47.936-7.296 133.312-7.296 133.312z" fill="#55C2EF"></path><path d="M886.528 135.872C638.08 135.872 526.656 7.616 524.8 5.824a17.6 17.6 0 0 0-25.6 0c-1.088 1.344-111.296 130.112-361.472 130.112a17.024 17.024 0 0 0-17.024 16.96v324.928c0 177.664 79.872 346.432 213.568 451.584a521.984 521.984 0 0 0 173.184 91.136 18.24 18.24 0 0 0 9.728 0 520.96 520.96 0 0 0 172.8-91.136c133.76-105.152 213.632-273.92 213.632-451.584V152.96a17.088 17.088 0 0 0-17.088-17.088zM876.8 477.12c0 170.496-76.416 332.416-204.8 433.088a496.384 496.384 0 0 1-160 85.44 497.088 497.088 0 0 1-160-85.44C224 809.6 147.2 647.808 147.2 477.12V163.008C360 158.336 474.88 67.584 512 32c37.12 35.584 152.064 126.272 364.8 130.944z" fill="#11344D"></path><path d="M785.92 229.184c-125.312-15.936-212.672-60.672-263.872-95.424a19.2 19.2 0 0 0-22.144 0c-51.2 34.688-138.368 79.424-263.808 95.424a19.712 19.712 0 0 0-17.216 19.2v229.12c0 147.2 65.664 286.976 175.616 373.376a432.64 432.64 0 0 0 109.248 63.36 18.688 18.688 0 0 0 7.168 1.344 18.432 18.432 0 0 0 7.232-1.344A430.72 430.72 0 0 0 627.2 851.2c109.952-86.336 175.616-225.92 175.616-373.376v-229.12a19.712 19.712 0 0 0-16.896-19.52zm-11.52 26.048v220.736c0 140.8-62.464 274.176-167.104 356.48a415.616 415.616 0 0 1-96 57.024 416.576 416.576 0 0 1-96-57.024c-105.024-82.368-167.488-215.616-167.488-356.48V255.232a671.36 671.36 0 0 0 263.168-96 671.424 671.424 0 0 0 263.424 96z" fill="#11344D"></path></svg>
                            <h3 className="slogan">安全保障</h3>
                            <p className="desc"> 芝麻信用&公安征信系统双认证</p>
                        </li>
                        <li>
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="home_care"><path d="M505.6 446.766l-63.994-17.278-12.8 19.838s-12.798 14.079-12.798 19.839 22.398 60.155 22.398 60.155L512 572.836l62.715-29.437 35.197-63.995-26.878-38.397-77.433 5.76z" fill="#E95D66"></path><path d="M798.697 96.075h170.226v259.179H798.697zm-744.9 563.794h170.226v259.18H53.797z" fill="#55C2EF"></path><path d="M217.624 685.467V914.57H53.797v32.637h179.825c8.96 0 16.639-7.04 16.639-16.638h45.436l174.706 87.672c7.68 3.84 16 5.76 23.678 5.76 8.96 0 18.559-2.56 26.878-7.04l357.092-207.983c15.998-9.599 26.237-27.518 26.237-46.076 0-15.999-7.039-30.718-19.198-40.957s-28.158-14.719-43.516-11.519L517.12 766.741l-92.153-92.153c-3.2-3.2-7.04-4.48-11.52-4.48H250.262c0-8.959-7.68-16.638-16.639-16.638H53.797v32.637m807.615 94.073L504.32 988.163c-5.76 3.2-13.44 3.84-19.839.64L305.937 899.85c-2.56-1.28-4.48-1.92-7.04-1.92h-49.276V701.466h156.787l128.63 128.63c5.76 5.76 8.96 13.438 8.96 21.118 0 16.639-13.44 30.077-30.078 30.077-7.68 0-15.359-3.2-21.118-8.959l-84.474-84.473-23.038 23.038 85.113 85.113c11.52 12.16 27.518 18.559 44.157 18.559 34.557 0 62.715-28.158 62.715-62.715 0-16.639-6.4-32.638-18.559-44.157l-13.439-13.439 302.056-52.475c5.76-1.28 12.16.64 16.639 4.48 4.48 3.839 7.68 9.599 7.68 15.998 0 7.04-3.84 14.079-10.24 17.919zm108.791-667.467V80.076H790.378c-8.96 0-16.639 0-16.639 16.638h-45.436L553.597 6.482c-16-8.32-35.198-8.96-50.556 0L145.949 214.465c-16.638 9.6-26.237 26.878-26.237 46.076 0 15.999 7.039 30.718 19.198 40.957 8.96 7.68 21.118 12.159 33.917 12.159 3.2 0 6.4-.64 8.96-.64l324.453-56.955 92.153 94.712c3.2 3.2 7.04 7.04 11.52 7.04h163.826s7.68 16.638 16.639 16.638h179.825v-32.637H806.376V112.713h163.827zM773.74 325.176H616.952l-128.63-131.19c-5.76-5.759-8.96-14.718-8.96-22.398 0-16.638 13.44-30.717 30.078-30.717 7.68 0 15.359 2.56 21.119 8.32l84.473 84.472 23.038-23.038-84.473-84.473c-11.52-12.159-27.518-18.558-44.157-18.558-34.557 0-62.715 28.157-62.715 62.715 0 16.638 6.4 32.637 18.559 44.156l13.439 13.439-302.056 52.476c-5.76 1.28-12.16-.64-16.639-4.48-4.48-3.84-7.04-9.6-7.04-15.999 0-7.679 3.84-14.079 10.24-17.918L519.039 34c5.76-3.2 13.44-3.84 19.839-.64l178.546 91.512c2.56 1.28 5.12 4.48 7.679 4.48h49.276v195.824zM512 432.687c-26.878-23.038-68.475-22.398-94.072 1.92-12.8 12.16-20.479 29.438-20.479 46.717 0 17.918 7.04 34.557 20.479 46.716l83.193 78.714c3.2 3.2 7.04 4.48 11.519 4.48 3.84 0 8.32-1.28 11.519-4.48l82.553-78.714c13.44-12.8 20.479-29.438 20.479-46.716 0-17.919-7.04-34.558-20.479-46.717-26.237-24.958-67.834-25.598-94.712-1.92zm71.674 71.675L512 572.836l-71.674-68.474c-6.4-6.4-10.24-14.72-10.24-23.038 0-8.96 3.84-16.64 10.24-23.039 7.04-6.4 15.998-10.239 25.598-10.239s18.558 3.2 25.598 10.24l8.959 8.959a16.677 16.677 0 0 0 22.398 0l8.96-8.96c14.078-13.438 37.116-13.438 51.195 0 6.4 6.4 10.24 14.72 10.24 23.039.64 8.959-3.2 17.278-9.6 23.038zm-261.739-119.03l-26.878-18.56c-6.4 9.6-12.159 19.84-17.278 30.078l29.437 14.72c3.84-8.96 8.96-17.92 14.72-26.239zm-66.554 181.745c2.56 11.519 5.76 23.038 9.599 33.917l30.717-10.88c-3.2-9.598-6.4-19.198-8.319-29.437l-31.997 6.4zm-.64-103.672l31.997 6.4c1.92-10.24 4.48-19.839 7.68-29.438l-31.358-10.24c-2.56 10.24-5.76 21.759-8.32 33.278zm-4.48 50.556c0 6.4 0 12.799.64 19.198l32.637-2.56c-.64-5.759-.64-10.879-.64-16.638 0-4.48 0-8.96.64-14.079l-32.637-1.92c-.64 5.12-.64 10.24-.64 15.999zm478.042-76.794c3.2 9.6 6.4 19.199 8.319 29.438l31.997-6.4c-2.56-11.519-5.76-22.398-9.599-33.277l-30.717 10.24zm-26.238 204.784l26.878 18.558c6.4-9.599 12.159-19.838 17.278-30.077l-29.437-14.72c-3.84 8.96-8.96 17.28-14.72 26.239zm26.878-55.036l31.357 10.24c3.84-10.88 6.4-22.399 8.96-33.918l-31.998-6.4c-2.56 10.88-5.12 21.119-8.32 30.078zm44.796-72.954c0-6.4 0-12.799-.64-19.198l-32.637 2.56c.64 5.759.64 10.878.64 16.638 0 4.48 0 8.96-.64 14.079l32.637 1.92c.64-5.76.64-10.88.64-15.999zm0 0" fill="#15354F"></path></svg>
                            <h3 className="slogan">专享服务</h3>
                            <p className="desc">私人定制，满足个性化需求</p>
                        </li>
                        <li>
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="home_fun"><path d="M855.04 85.76v268.8s-1.92 364.8 0 369.92c1.92 5.12-15.36 58.88-15.36 58.88s-47.36 56.96-58.88 56.96c-11.52 0-96-5.12-105.6 0-10.24 5.12-67.2-7.04-77.44 0-10.24 7.04-48.64-11.52-53.76-15.36s-51.84-79.36-51.84-79.36v-30.08l-56.96-10.24-7.04 14.08L416 736s10.88 74.24 10.88 82.56 99.2 87.04 99.2 87.04l122.88 19.2 159.36-7.04 102.4-99.2s18.56-51.84 30.08-72.32c11.52-20.48 11.52-656 11.52-656l-26.88-31.36-30.08 7.68v-32L865.28 60.8" fill="#55C2EF"></path><path d="M87.04 311.04h694.4v171.52L739.2 556.8l-62.08-3.84h-23.68l-30.08 35.84H572.8L512 546.56l-11.52-96.64s-20.48-21.12-32-24.32c-11.52-3.2-62.72-1.92-62.72-1.92l-21.12 26.24-26.24 25.6 17.28 13.44-28.16 62.72-120.96 37.12-58.24-15.36-65.92-47.36-15.36-76.16V311.04z" fill="#E95D66"></path><path d="M896.64 33.92H896c-10.24 0-20.48 3.2-28.8 7.68-16.64 9.6-27.52 27.52-27.52 48v635.52c0 58.24-47.36 104.96-104.96 104.96H614.4c-58.24 0-104.96-47.36-104.96-104.96v-5.76c41.6-1.28 74.88-35.2 74.88-77.44v-9.6c0-8.96-7.04-16-16-16H345.6c-8.96 0-16 7.04-16 16v9.6c0 39.04 28.8 71.04 66.56 76.8v6.4c0 120.32 97.92 218.24 218.24 218.24h120.32c120.32 0 218.24-97.92 218.24-218.24V90.24c0-31.36-25.6-56.32-56.32-56.32zm-489.6 653.44c-22.4 0-41.6-16.64-44.8-38.4h188.8c-3.2 21.76-21.76 38.4-44.8 38.4h-99.2zm513.28 37.76c0 102.4-83.2 186.24-186.24 186.24H614.4c-102.4 0-186.24-83.2-186.24-186.24v-5.76h48.64v5.76c0 75.52 61.44 137.6 137.6 137.6h120.32c75.52 0 137.6-61.44 137.6-137.6V90.24c0-12.8 10.88-23.68 23.68-23.68h.64c13.44 0 23.68 10.88 23.68 23.68v634.88zM284.8 746.24c0-32-26.24-58.24-58.24-58.24s-58.24 26.24-58.24 58.24 26.24 58.24 58.24 58.24 58.24-26.24 58.24-58.24zm-58.24 26.24c-14.72 0-26.24-11.52-26.24-26.24S211.84 720 226.56 720s26.24 11.52 26.24 26.24c0 14.08-11.52 26.24-26.24 26.24zm92.8 46.08c-48 0-86.4 39.04-86.4 86.4 0 48 39.04 87.04 86.4 87.04 48 0 87.04-39.04 87.04-87.04 0-47.36-39.04-86.4-87.04-86.4zm0 141.44c-30.08 0-54.4-24.32-54.4-54.4s24.32-54.4 54.4-54.4 54.4 24.32 54.4 54.4c0 29.44-24.32 54.4-54.4 54.4zm0 0" fill="#15354F"></path><path d="M674.56 378.88l-23.68 23.68v30.08l17.92 17.28 23.68-6.4 32 6.4 8.32-46.08-24.96-24.96" fill="#FFF"></path><path d="M692.48 475.52c33.28 0 60.8-26.88 60.8-60.8s-26.88-60.8-60.8-60.8c-33.28 0-60.8 26.88-60.8 60.8s27.52 60.8 60.8 60.8zm0-88.32c15.36 0 28.16 12.8 28.16 28.16s-12.8 28.16-28.16 28.16-28.16-12.8-28.16-28.16c0-16 12.8-28.16 28.16-28.16zm0 0" fill="#15354F"></path><path d="M355.2 327.04L131.84 553.6l-37.76-42.88v-16l175.36-167.68" fill="#FFF"></path><path d="M264.96 602.88c69.76 0 126.08-56.32 126.08-126.08v-1.92c0-24.32 19.84-43.52 43.52-43.52h1.28c24.32 0 43.52 19.84 43.52 43.52v1.92c0 69.76 56.32 126.08 126.08 126.08h1.28c5.12 33.92 35.2 60.8 71.04 60.8 39.68 0 71.68-32 71.68-71.68 0-6.4-.64-12.8-2.56-18.56 32-24.96 53.12-64.64 53.12-108.16v-230.4c0-8.96-7.04-16-16-16H87.68c-8.96 0-16 7.04-16 16v230.4c0 76.16 62.08 137.6 137.6 137.6h55.68zm412.16 28.16c-21.76 0-39.04-17.92-39.04-39.04 0-21.76 17.92-39.04 39.04-39.04 21.76 0 39.04 17.92 39.04 39.04.64 21.12-17.28 39.04-39.04 39.04zM103.68 250.88h663.68v48.64H103.68v-48.64zm0 222.08V331.52h141.44L103.68 472.96zm9.6 35.84l177.28-177.28h35.2L126.72 530.56c-5.12-6.4-9.6-14.08-13.44-21.76zM371.2 331.52h395.52v133.76c0 31.36-14.08 60.16-35.84 79.36-13.44-14.72-32-24.32-53.76-24.32-32 0-59.52 21.12-68.48 50.56h-3.2c-51.84 0-93.44-42.24-93.44-93.44v-1.92c0-42.24-33.92-76.16-76.16-76.16h-1.28a75.933 75.933 0 0 0-76.16 76.16v1.92c0 51.84-42.24 93.44-93.44 93.44h-55.68c-21.76 0-42.24-6.4-58.88-17.92l220.8-221.44zm4.48-146.56c42.24 0 76.8-34.56 76.8-76.8s-34.56-76.8-76.8-76.8-76.8 34.56-76.8 76.8c.64 42.88 34.56 76.8 76.8 76.8zm0-120.96c24.32 0 44.16 19.84 44.16 44.16 0 24.32-19.84 44.16-44.16 44.16-24.32 0-44.16-19.84-44.16-44.16 0-23.68 19.84-44.16 44.16-44.16zm0 0" fill="#15354F"></path></svg>
                            <h3 className="slogan">地道体验</h3>
                            <p className="desc"> 汇聚全球50000+特色体验</p>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}
homeyzdr = withRouter(homeyzdr);
export default homeyzdr;