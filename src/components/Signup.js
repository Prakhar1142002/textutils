import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Signup() {
    return (
        <>
            <Navbar />
            <div class="container-fluid" style={{ paddingTop: '0' }}>
                <div class="row">
                    <div class="col-lg-6 left-half-image" style={{ paddingTop: '2.5rem' }}>
                        <img class="title-image" src='images/person2.png' alt="Loading..." style={{ width: '80%', marginLeft: '1rem' }} />
                    </div>
                    <div class="col-lg-6" style={{ paddingTop: 0 }}>
                        <div class="container-fluid form-div" style={{ marginTop: '0px'}}>
                            <form>
                                <div class="form-div-name row">
                                    <div class="mb-4 col-lg-6">
                                        <input type="text" class="form-control form-control-lg" id="FirstName" placeholder="First Name" />
                                    </div>
                                    <div class="mb-4 col-lg-6">
                                        <input type="text" class="form-control form-control-lg" id="LastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" id="exampleInputPassword1" />
                                </div>
                                {/* <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  */}

                                <div class="row date-picker">
                                    <div class="col-lg-4">
                                        <select class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option selected>Date</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <select class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option selected>Month</option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">Jun</option>
                                            <option value="06">Jul</option>
                                            <option value="07">Aug</option>
                                            <option value="08">Sep</option>
                                            <option value="09">Oct</option>
                                            <option value="10">Nov</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <select class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option selected>Year</option>
                                            <option value="1">1905</option>
                                            <option value="2">1906</option>
                                            <option value="3">1907</option>
                                            <option value="4">1908</option>
                                            <option value="5">1909</option>
                                            <option value="6">1910</option>
                                            <option value="7">1911</option>
                                            <option value="8">1912</option>
                                            <option value="9">1913</option>
                                            <option value="10">1914</option>
                                            <option value="11">1915</option>
                                            <option value="12">1916</option>
                                            <option value="13">1917</option>
                                            <option value="14">1918</option>
                                            <option value="15">1919</option>
                                            <option value="16">1920</option>
                                            <option value="17">1921</option>
                                            <option value="18">1922</option>
                                            <option value="19">1923</option>
                                            <option value="20">1924</option>
                                            <option value="21">1925</option>
                                            <option value="22">1926</option>
                                            <option value="23">1927</option>
                                            <option value="24">1928</option>
                                            <option value="25">1929</option>
                                            <option value="26">1930</option>
                                            <option value="27">1931</option>
                                            <option value="28">1932</option>
                                            <option value="29">1933</option>
                                            <option value="30">1934</option>
                                            <option value="31">1935</option>
                                            <option value="32">1936</option>
                                            <option value="33">1937</option>
                                            <option value="34">1938</option>
                                            <option value="35">1939</option>
                                            <option value="36">1940</option>
                                            <option value="37">1941</option>
                                            <option value="38">1942</option>
                                            <option value="39">1943</option>
                                            <option value="40">1944</option>
                                            <option value="41">1945</option>
                                            <option value="42">1946</option>
                                            <option value="43">1947</option>
                                            <option value="44">1948</option>
                                            <option value="45">1949</option>
                                            <option value="46">1950</option>
                                            <option value="47">1951</option>
                                            <option value="48">1952</option>
                                            <option value="49">1953</option>
                                            <option value="50">1954</option>
                                            <option value="51">1955</option>
                                            <option value="52">1956</option>
                                            <option value="53">1957</option>
                                            <option value="54">1958</option>
                                            <option value="55">1959</option>
                                            <option value="56">1960</option>
                                            <option value="57">1961</option>
                                            <option value="58">1962</option>
                                            <option value="59">1963</option>
                                            <option value="60">1964</option>
                                            <option value="61">1965</option>
                                            <option value="62">1966</option>
                                            <option value="63">1967</option>
                                            <option value="64">1968</option>
                                            <option value="65">1969</option>
                                            <option value="66">1970</option>
                                            <option value="67">1971</option>
                                            <option value="68">1972</option>
                                            <option value="69">1973</option>
                                            <option value="70">1974</option>
                                            <option value="71">1975</option>
                                            <option value="72">1976</option>
                                            <option value="73">1977</option>
                                            <option value="74">1978</option>
                                            <option value="75">1979</option>
                                            <option value="76">1980</option>
                                            <option value="77">1981</option>
                                            <option value="78">1982</option>
                                            <option value="79">1983</option>
                                            <option value="80">1984</option>
                                            <option value="81">1985</option>
                                            <option value="82">1986</option>
                                            <option value="83">1987</option>
                                            <option value="84">1988</option>
                                            <option value="85">1989</option>
                                            <option value="86">1990</option>
                                            <option value="87">1991</option>
                                            <option value="88">1992</option>
                                            <option value="89">1993</option>
                                            <option value="90">1994</option>
                                            <option value="91">1995</option>
                                            <option value="92">1996</option>
                                            <option value="93">1997</option>
                                            <option value="94">1998</option>
                                            <option value="95">1999</option>
                                            <option value="96">2000</option>
                                            <option value="97">2001</option>
                                            <option value="98">2002</option>
                                            <option value="99">2003</option>
                                            <option value="100">2004</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="gender-radio">
                                    <div style={{ margin: '5px auto 0 auto', display: 'block' }}>
                                        <div class="form-check form-check-inline" style={{color: 'white', margin: '0 auto', display: 'inline-block', padding: '0 3rem 0' }}>
                                            <label class="form-check-label" for="inlineRadio1"> Male </label>
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        </div>
                                        <div class="form-check form-check-inline" style={{color: 'white', margin: '0 auto', display: 'inline-block', padding: '0 3rem' }}>
                                            <label class="form-check-label" for="inlineRadio2">Female</label>
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        </div>
                                        <div class="form-check form-check-inline" style={{color: 'white', margin: '0 auto', display: 'inline-block', padding: '0 3rem 0' }}>
                                            <label class="form-check-label" for="inlineRadio1">Other</label>
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        </div>
                                    </div>
                                </div>
                                <Link class="move_to_login" to="/login">
                                <button type="submit" class="btn btn-lg btn-primary" style={{ margin: '1.5rem auto 0 auto', display: 'block' }}>Sign Up</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
