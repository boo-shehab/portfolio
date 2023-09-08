import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const Skills = () => {
  return (
    
    <div class="skills__content grid" data-content id="skills">
    <div class="skills__area">
        <h3 class="skills__title">
            Frontend developer
        </h3>
        <div class="skills__box">
            <div class="skills__group">
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">HTML</h3>
                        <span class="skills__level">intermediate</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">CSS</h3>
                        <span class="skills__level">intermediate</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">JavaScript</h3>
                        <span class="skills__level">advanced-intermediate</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">jest</h3>
                        <span class="skills__level">intermediate</span>
                    </div>
                </div>
            </div>
            <div class="skills__group">
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">React</h3>
                        <span class="skills__level">advanced-intermediate</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">React-Redux</h3>
                        <span class="skills__level">advanced-intermediate</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Next.js</h3>
                        <span class="skills__level">intermediate-basic</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Bootstrap</h3>
                        <span class="skills__level">intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="skills__area">
        <h3 class="skills__title">
            Backend developer
        </h3>
        <div class="skills__box">
            <div class="skills__group">
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Ruby</h3>
                        <span class="skills__level">basic</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Ruby on Rails</h3>
                        <span class="skills__level">intermediate-basic</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Rspec</h3>
                        <span class="skills__level">basic</span>
                    </div>
                </div>
            </div>
            <div class="skills__group">
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Postgresql</h3>
                        <span class="skills__level">intermediate-basic</span>
                    </div>
                </div>
                <div class="skills__data">
                    <i><BsCheck2Circle /></i>
                    <div>
                        <h3 class="skills__name">Mysql</h3>
                        <span class="skills__level">intermediate-basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
export default Skills;
