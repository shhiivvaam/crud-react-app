import React, { useState } from 'react'
import { BsFillEmojiSunglassesFill, BsFillBookmarkPlusFill } from 'react-icons/bs';                     // imported emohis from react-icons page

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'



const Todos = () => {

    const [emojis, setEmojis] = useState(false);
    const [text, setText] = useState('');

    // Add Emojis Function
    const AddEmojis = (event) => {
        const symbol = event.unified.split("");
        const emArray = [];
        symbol.forEach(element => {
            emArray.push("0x" + element);
            let emoji = String.fromCodePoint(...emArray);
            setText(text + emoji);
        });
    }

    return (
        <div className='pt-3rem w-[90%] mx-auto sm:w-[70%] md:w-[60%] lg:w-[40%]'>
            <h1 className='text-2 font-medium text-center capitalize'>Todo List Application</h1>

            {/* Todo List Input */}

            <div>
                <form className='flex items-start gap-2 pt-2rem'>
                    <div className='w-full flex items-end p-2 bg-todo rounded-lg relative'>
                        <textarea
                            className='w-full bg-transparent outline-none resize-none text-sm'
                            placeholder="Enter your Todos" cols="30" rows="2"
                            onChange={(event) => {
                                setText(event.target.value);
                            }}
                        >
                        </textarea>
                        <span
                            className='cursor-pointer hover:text-slate-300'
                            onClick={() => {
                                setEmojis(!emojis);
                            }}>
                            <BsFillEmojiSunglassesFill />
                        </span>
                        {emojis &&
                            <div className='absolute right-2 top-[100%]'>
                                <Picker
                                    data={data}
                                    onEmojiSelect={AddEmojis}
                                    emojiSize={20}
                                    emojiButtonSize={28}
                                    maxFrequentRows={1} />
                            </div>
                        }
                    </div>
                    <button type="submit" className='flex items-center capitalize gap-2 bg-yellow-300 text-black py-1.5 px-3 rounded-lg hover:bg-bodyBg hover:text-white'>
                        <BsFillBookmarkPlusFill />
                        Todo
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Todos;