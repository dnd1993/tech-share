/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

const Resources = () => {
  return (
    <>
      <h1 className="text-red-700 mb-7">Helpful links:</h1>
      <ul>
        <li>
          <a
            href="https://www.reddit.com/r/reactjs/comments/ye1qis/what_about_react_do_you_wish_you_knew_earlier/?sort=new"
            target="_blank"
            className="text-black text-2xl"
          >
            What about React you wish you knew earlier?
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://www.youtube.com/watch?v=RAJD4KpX8LA"
            target="_blank"
            className="text-black text-2xl"
          >
            useState: Asynchronous or what?
          </a>
        </li>
        <li>
          <a
            href="https://www.developerway.com/posts/react-key-attribute"
            target="_blank"
            className="text-black text-2xl"
          >
            React key attribute: best practices for performant lists
          </a>
        </li>
        <li>
          <a
            href="https://beta.reactjs.org/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes"
            target="_blank"
            className="text-black text-2xl mt-1"
          >
            You might not need an effect
          </a>
        </li>
      </ul>
    </>
  );
};

export default Resources;
