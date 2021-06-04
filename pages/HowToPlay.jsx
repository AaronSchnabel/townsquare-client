import React from 'react';

import Link from '../Components/Site/Link';
import Panel from '../Components/Site/Panel';

class HowToPlay extends React.Component {
    render() {
        return (
            <div className='col-xs-12'>
                <Panel title='How To Play on The Iron Throne'>
                    <h3 className='htp-intro'>Introduction</h3>
                    <a className='btn btn-danger btn-lg pull-right' target='_blank' href='https://github.com/cryogen/throneteki/issues'>Report Problems</a>
                    <p>This guide is aimed at players familiar with the A Game of Thrones: The Card Game 2nd Edition who want to start playing online using The Iron Throne platform. If you are new to this cardgame in general, there is a <a href='https://www.youtube.com/watch?v=A1s54Wlgfyo' target='_blank'>helpful tutorial video</a>, a <a href='https://images-cdn.fantasyflightgames.com/filer_public/ba/2a/ba2a5ea6-a3cd-4772-a603-6f1906f63053/gt01_learn-to-play-web.pdf' target='_blank'>Learn To Play guide</a>, and a <a href='http://thronesdb.com/rulesreference' target='_blank'>Rules Reference Guide</a> to help you out.</p>
                    <div className='htp-topic'>
                        <h3 className='htp-title'>Topics</h3>
                        <ul className='htp-main-list'>
                            <li><a href='#decks'>Adding Decks</a></li>
                            <li><a href='#profile'>Profile Options</a></li>
                            <ul className='htp-sub-list'>
                                <li><a href='#action'>Action Windows</a></li>
                                <li><a href='#timed'>Timed Interrupt Window</a></li>
                            </ul>
                            <li><a href='#bugs'>Bugs and Automation</a></li>
                            <li><a href='#interactions'>Specific Card Interactions</a></li>
                            <ul className='htp-sub-list'>
                                <li><a href='#riddle'>Varys' Riddle vs Summer Harvest</a></li>
                                <li><a href='#mag'>Mag the Mighty vs. saves</a></li>
                            </ul>
                            <li><a href='#commands'>Manual Commands</a></li>
                            <li><a href='#conceding'>About Stats, Conceding and Leaving Games</a></li>
                        </ul>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='decks'>Adding Decks</h3>
                        <p>Start by making sure you have created an account and are logged in. You must be logged in to add decks and spectate or play games. The Iron Throne has a functional <Link href='/decks'>Deckbuilder</Link>, although most people use the more fully featured <a target='_blank' href='http://www.thronesdb.com'>ThronesDB</a> deckbuilder to build their decks. After building your deck on ThronesDB download it as a TXT file, then copy and paste it into the deckbuilder here. You are now ready to start playing. Head over to the <Link href='/play'>Play</Link> section to create, join or watch games.</p>
                        <p>If you are new to Thrones 2.0, you can find an introductory Stark deck <a target='_blank' href='http://thronesdb.com/deck/view/358860'>here</a>, and an introductory Lannister/Tyrell deck <a target='_blank' href='http://thronesdb.com/deck/view/358861'>here</a>. Both decks only feature cards from the Core Set. If you are new and using any of these decks to play be sure to check the ‘Beginner’ category when creating your game, so you don’t necessarily get destroyed by an up to date power deck. If that happens anyway, just keep practicing and you’ll get the hang of it soon enough.</p>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='profile'>Profile Options</h3>
                        <p>Clicking your <Link href='/profile'>Profile</Link> at the top right of the page allows you to tailor certain aspects of gameplay to your wishes.</p>

                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle' id='action'>Action Windows</h4>
                            <p>Thrones 2nd Edition has quite a large number of phases and their associated action windows, a number of which are not used regularly by all decks. Always prompting these action windows leads to a lot of tediously clicking ‘Pass’, while never prompting these action windows leads to certain cards not being able to be used to their fullest extent. To solve this issue you can check/uncheck any action windows in your profile to determine when you’ll be prompted or not.</p>
                            <p>For example: if you play cards like <a target='_blank' href='https://thronesdb.com/card/01088'>The Tickler</a>, <a target='_blank' href='https://thronesdb.com/card/06031'>Wex Pyke</a>, <a target='_blank' href='https://thronesdb.com/card/01130'>Messenger Raven</a> or <a target='_blank' href='https://thronesdb.com/card/01139'>Take the Black</a> in your deck, be sure to check Dominance Actions in your profile. Your action window settings can also be changed during a game by clicking the settings button on the bottom of your screen.</p>
                        </div>

                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle' id='timed'>Timed Interrupt Window</h4>
                            <p>The combination of automated gameplay and the ability to play reactions or interrupts from hand has the potential to “leak” information about what your opponent might hold in his hand. For example: if after playing an event there is a pause before it resolves, you might guess correctly that was due to your opponent being prompted to use The Hand’s Judgment. The three most notable cards that would be leaked this way are <a target='_blank' href='https://thronesdb.com/card/01045'>The Hand's Judgment</a>, <a target='_blank' href='https://thronesdb.com/card/01102'>Treachery</a> and <a target='_blank' href='https://thronesdb.com/card/02096'>Vengeance for Elia</a>. To solve this issue, the Timed Interrupt Window was created. Depending on which options you have checked, you get a timed prompt during certain triggers asking for interrupts whether you are able to interrupt these triggers or not. Now your opponent experiences the same pause any time and won’t be able to correctly guess whether you’re holding certain cards anymore.</p>
                            <p>There are a couple of options: you can decide whether you want to always be prompted for triggered card abilities (useful if you’re playing Treachery), events (useful if you’re playing The Hand’s Judgment, The Pack Survives, etc.) or both. Claim (useful if you’re playing Vengeance for Elia) is currently combined with the event option. The timer duration can be modified too. Obviously, if you don’t care about leaking cards from your hand (or you don’t play these cards anyway) and just want a quick game, deselecting both options will allow for that. You will still get prompted to use the aforementioned cards, but only when you actually have them.</p>
                        </div>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='bugs'>Bugs and automation</h3>
                        <p>While The Iron Throne is still a work in progress, the vast majority of cards are implemented and should be working correctly. We keep a list up to date with unimplemented and partially implemented cards <a target='_blank' href='https://github.com/cryogen/throneteki/projects'>here</a>. If you happen upon a card that you believe is not working as it should and it is not on that list, it would help immensely if you would submit an issue on <a target='_blank' href='https://github.com/cryogen/throneteki/issues'>GitHub</a>. Other comments and/or feedback can be left on GitHub as well.</p>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='interactions'>Specific Card Interactions</h3>

                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle' id='riddle'><a href='https://thronesdb.com/card/04020' target='_blank'>Varys' Riddle</a> vs <a href='https://thronesdb.com/card/04039' target='_blank'>Summer Harvest</a></h4>
                            <p>CardGameDB rule threads on this interaction: <a href='http://www.cardgamedb.com/forums/index.php?/topic/32255-varys-riddle-vs-summer-harvest/' target='_blank'>1</a>, <a href='http://www.cardgamedb.com/forums/index.php?/topic/33283-timming-varys-riddle-summer-harvest/' target='_blank'>2</a>.</p>
                            <p>These plots have a very specific interaction that's implemented a little differently from the official ruling. Officially, X will be defined by both plots and thus will be both 2 and 7. The first player will consequently decide what value X is whenever it gets referenced (a more thorough explanation is detailed in the above links). On The Iron Throne it is implemented a little differently. As the player who revealed Varys' Riddle, to make sure your opponent's value of X will be 2, you have to go first and trigger Summer Harvest first. As the player who revealed Summer Harvest, if the Varys' Riddle player has made you first player (or you won initiative somehow), you'd want to trigger Varys' Riddle first to make sure your X is 7.</p>
                        </div>

                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle' id='mag'><a href='https://thronesdb.com/card/08018' target='_blank'>Mag the Mighty</a> vs saves</h4>
                            <p>Mag the Mighty's forced reaction has the controller of Mag first choose a character they control to kill. Since the second part (opponent's kill) for Mag is worded as a 'then'-effect, this part of the effect will only resolve if the first part was resolved completely (<a href='https://thronesdb.com/rulesreference#The_word_Then' target='_blank'>source</a>). This means that if Mag's controller chose to save their kill, the other player would not have to kill a character as the pre-then effect did not resolve completely.</p>
                            <p>This interaction is currently not implemented on The Iron Throne as the opponent is always prompted for the second kill. The solution here is to just click 'Done' on the second prompt without selecting a character if such a situation ever occurs.</p>
                        </div>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='commands'>Manual Commands</h3>
                        <p>Every once in a while something happens during a game that shouldn’t have happened. This can occur due to a misclick, an unimplemented card or a bug in the software. To fix the game state in such situations a variety of manual commands are implemented. Typing these commands as a chatmessage during a game will have the following effect:</p>
                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle'>Basic Card Stats Manipulation</h4>
                            <ul>
                                <li>/bullets [x | +/-mod] - Sets the bullets of a dude to x or modifies it by mod.</li>
                                <li>/clear-shooter - Clears the shooter type set by the chat command.</li>
                                <li>/clear-suit - Clears the suit effects done by chat commands.</li>
                                <li>/control [x | +/-mod] - Sets the control of a card to x or modifies it by mod.</li>
                                <li>/inf [x | +/-mod] [t] - Sets the influence of a dude to x or modifies it by mod. Optional parameter "t" can be set to 'influence:deed' if you want to set only influence for controlling deeds.</li>
                                <li>/reset-stats [suit | value | bullets | influence | control | upkeep | production] - Resets stat to printed (all if stat is omitted).</li>
                                <li>/shooter [stud | draw] - Sets shooter type of a dude to stud or draw.</li>
                                <li>/suit [hearts | clubs | diams | spades] - Sets the suit of a card.</li>
                                <li>/value [x | +/-mod] - Sets the value of a dude to x or modifies it by mod.</li>
                            </ul>
                        </div>
                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle'>Other Card Stats Manipulation</h4>
                            <ul>
                                <li>/add-keyword k - adds keyword k to a card.</li>
                                <li>/blank - Blanks a card.</li>
                                <li>/bounty [x | +/-mod] - Sets the bounty of a dude to x or modifies it by mod.</li>
                                <li>/clear-effects - Clears any effects on a card.</li>
                                <li>/kung-fu [x | +/-mod] - Sets kung fu rating of a selected dude to x or modifies it by mod.</li>
                                <li>/remove-keyword k - Removes keyword k from a card.</li>
                                <li>/reset-abilities - Resets/Refreshes ability usage on a card.</li>
                                <li>/skill-rating [blessed | shaman | huckster | mad] [x | +/-mod] - Sets specified skill rating of selected dude to x or modifies it by mod.</li>
                                <li>/token t x - Sets the token count of a card of type 't' to 'x'. Currently used token types are: 'bounty' and 'ghostrock'.<br /><strong>Note:</strong> For stud and draw use /shooter command, for bullets, control and influence use their respective commands.</li>
                                <li>/unblank - Unblanks a card.</li>
                            </ul>
                        </div>
                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle'>Game Actions</h4>
                            <ul>
                                <li>/ace - aces a card (moves it to boot hill). You can do this also by draging and droping the card to boot hill.</li>
                                <li>/discard-random x - Discards x cards randomly from your hand.</li>
                                <li>/discard-deck x - Discards top x cards from your deck.</li>
                                <li>/draw x - Draws x cards from your deck to your hand.</li>
                                <li>/join-posse - Moves a dude to the respective posse in the current shootout.</li>
                                <li>/join-without-move - Adds a dude to the respective posse in the current shootout without moving.</li>
                                <li>/move - Move dude to another location.</li>
                                <li>/pull - Performs simple pull without success check.</li>
                                <li>/pull [x | kf] - Performs pull using selected dude and does success check using difficulty x, or based on Kung Fu dude if parameter is "kf".</li>
                                <li>/remove-from-posse - Removes a dude from the posse in the current shootout.</li>
                                <li>/use - Announces that selected unscripted card will be used.</li>
                            </ul>
                        </div>
                        <div className='htp-subtopic'>
                            <h4 className='htp-subtitle'>Rest of the Commands</h4>
                            <ul>
                                <li>/add-card [name | code] - Adds a card to the draw deck. This card can be identified by name or code (can be found in dtdb)</li>
                                <li>/attach - attach card to another card.</li>
                                <li>/cancel-shootout - Cancels the current shootout.</li>
                                <li>/cancel-prompt - Clears the current prompt and resume the game flow.  Use with caution and only when the prompt is 'stuck' and you are unable to continue.</li>
                                <li>/done - Changes active player to next player.</li>
                                <li>/give-control - Gives control of a card to your opponent.  Use with caution.</li>
                                <li>/hand-rank x - Modifies hand rank of the current player by x.</li>
                                <li>/look-deck x - Looks at top x cards of your deck.</li>
                                <li>/pass - Passes current play.</li>
                                <li>/rematch - Start over a new game with the current opponent.</li>
                                <li>/remove-from-game - Removes a card from the game.</li>
                                <li>/reveal-hand - Reveals your hand to the opponent.</li>
                                <li>/reveal-deck x - Reveals top x cards from your deck.</li>
                                <li>/shuffle-discard - Shuffles discard pile to draw deck.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='htp-topic'>
                        <h3 className='htp-title' id='conceding'>About Stats, Conceding, and Leaving Games</h3>
                        <p>The Iron Throne does not rank and/or match players by skill level in any way. There are three categories (beginner, casual and competitive) to be chosen when creating a game which gives an indication of what to expect, but it doesn't enforce anything. Even though personal stats are not being tracked, most players still very much appreciate a formal concede by clicking the ‘Concede’ button and typing ‘gg’ before leaving a game. The reality of quick and anonymous online games dictates this won’t always happen though, as evidenced by regular complaining in the main lobby about people leaving without conceding. Our advice is to just move on to the next game since in the end, conceding or not doesn’t really impact anything. Happy gaming!</p>
                    </div>
                </Panel>
            </div>
        );
    }
}

HowToPlay.displayName = 'How To Play';
HowToPlay.propTypes = {
};

export default HowToPlay;
