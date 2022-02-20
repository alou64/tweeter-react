function TweetForm() {
  const tweetPrompt = "what are you humming about";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={event => event.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={tweetPrompt}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={event => event.preventDefault()} />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
};

export default TweetForm;








// function submitTweet() {
//   <input type="submit" value="Tweet" className="form__input" onClick={event => event.preventDefault()} />
// };
