## 지금 App.js는 비효율적인 면을 갖고있다. TOC가 redering되기 위해 필요한 데이터는 state의 contents[]이다. 이 내용이 바뀌면 TOC 컴포넌트의 render가 다시 실행 될 것이다. 이 말은 즉슨, 만약 contents가 바뀌지 않는다면 TOC의 render()는 호출될 필요가 없다. 그러나 현재 코드에서는 사용자의 모든 act에 TOC의 render()가 실행되고 있다. facebook은 이러한 이슈를 방지하기 위해 shouldComponentUpdate()라는 함수를 만들었다. 이 함수의 return이 false라면 react는 그 밑의 render()함수를 읽지 않는다. 


또한 shouldComponentUpdate의 매개변수는 newProps, newState로 약속이 되어 있다. 
 -console.log(newProps, 'A');
 -console.log(this.props.data, 'B');
B에서는 render()가 호출되지 못하였기 때문에 state.content[] 값을 그대로 갖고온다. 하지만 newProps는 추가된 값까지 가져오는 것을 볼 수 있다. 즉, 전자는 배열값을 가져오지만 후자는 변경값을 갖고온다. 


만약 쓸데없는 redering을 막기위해 shouldComponentUpdate를 사용했고, 원본값과 변경값을 비교하여 변경값이 있을 때만 TOC가 render된다는 조건을 추가했다고 치자. 이 때, state.contents[]를 push로서 값을 추가했다면 TOC에서 this.props.data를 했을 때 원본 배열에 값을 추가하였기 때문에 shouldComponentUpdate함수 내에 if문으로 조건을 붙일 수 없다. 그러나 concat()을 사용한다면 원본값은 두고 그 원본값을 복제하여 변경값을 추가한다음 render()하기 때문에 원본값과 변경값을 비교할 수 있는 환경을 만들 수 있다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
