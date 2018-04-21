import * as React from 'react';
import JumboSlider from '../../components/JumboSlider/JumboSlider';

const Home = () => (
  <div>
    <JumboSlider
      slides={[
        { image: 'https://farm3.staticflickr.com/2914/14185397280_e51c40b1df_b.jpg' },
        { image: 'https://farm6.staticflickr.com/5076/14164379250_71c3a5b32a_b.jpg' },
        { image: 'https://farm3.staticflickr.com/2937/14371160993_186df4a083_b.jpg' }
      ]}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet tortor. Etiam nec ante nisl. Morbi at sodales felis. Proin et nisi tincidunt, bibendum nulla ut, bibendum metus. In eu arcu posuere, commodo risus interdum, aliquet nibh. Nam nec iaculis libero. Sed quis neque id urna tempus iaculis. Aliquam gravida eros eu elit mattis, sed fringilla sem vestibulum. Vivamus molestie ac orci non fringilla. Ut ultricies et tellus in consequat. Nunc euismod felis sem, at congue nisi blandit volutpat. Praesent non pulvinar turpis. Nullam aliquam congue augue, vel molestie mauris accumsan in.

Sed vitae iaculis felis, in imperdiet mauris. Donec sit amet eleifend mi. Pellentesque maximus nunc a sem commodo, vel ornare nibh elementum. Vestibulum gravida augue eu odio dapibus finibus. Nam elementum mauris eu pharetra malesuada. Sed finibus tortor augue, ut elementum augue venenatis id. Suspendisse dapibus eros magna, eget finibus tortor sodales a. Vestibulum a enim sed arcu volutpat congue. Integer ullamcorper justo consequat erat scelerisque ultricies. Mauris tincidunt tortor sed nisl elementum rhoncus. Integer bibendum diam ut diam laoreet ornare. Curabitur semper sapien elit, in tempus ligula convallis vitae. Integer fringilla laoreet odio, eget fermentum tellus. Proin metus risus, dictum id ornare ultrices, consequat sed lacus. Praesent semper faucibus sapien eu placerat. Sed facilisis varius quam, et facilisis massa tincidunt molestie.

Nunc hendrerit luctus felis, efficitur pulvinar diam efficitur a. In tellus sem, blandit eget mi id, gravida vestibulum diam. Cras lobortis laoreet tempor. Sed in eros eu nibh vehicula ornare elementum eget eros. Sed in felis id velit convallis ullamcorper in nec elit. Morbi lacinia, metus nec accumsan tempus, erat dolor semper erat, vitae eleifend ex nunc ut augue. Aenean ut lectus sed nulla suscipit cursus ac id lorem. Pellentesque at dapibus urna. Quisque eget ipsum porta, feugiat libero at, fermentum diam. Donec porttitor euismod libero. Etiam cursus consequat lectus nec varius. Nulla nulla tortor, tempor id molestie eget, aliquet eget massa.

Duis nunc nulla, ullamcorper non eleifend sed, vestibulum euismod ante. Curabitur euismod rutrum sem, et pulvinar mauris accumsan pellentesque. Aenean a molestie ligula. Quisque tellus eros, luctus at interdum at, tempus efficitur justo. Proin elit eros, eleifend sed mattis maximus, blandit vitae lectus. Maecenas nec volutpat eros. Curabitur mattis ante diam, ac scelerisque sem porta vel.

Etiam et hendrerit dolor. Mauris faucibus feugiat congue. Etiam pellentesque interdum elit, accumsan blandit eros auctor sodales. Cras ex nisl, vehicula et quam a, faucibus fringilla magna. Vestibulum eu felis tortor. Aliquam ac erat non nunc consectetur aliquet. Etiam pellentesque, magna sed varius pharetra, nisi diam ornare urna, ac pretium nisl arcu a ex. Proin velit purus, venenatis id malesuada vitae, ultrices id sem. Ut non blandit sapien, vel tristique nisl. Donec et erat dui.

In dapibus feugiat neque, quis rhoncus libero blandit eu. Praesent efficitur felis quis risus rhoncus, sed venenatis massa ornare. Donec fermentum interdum volutpat. Curabitur faucibus, mi non cursus blandit, sapien velit hendrerit felis, et ultricies nulla ante ac lacus. Nulla sed tincidunt tortor. Nullam bibendum sodales feugiat. Quisque tempus, turpis mollis tincidunt sollicitudin, ante justo egestas est, porta iaculis turpis nulla at massa. Pellentesque dapibus nunc in congue venenatis.

Nunc non finibus ante, sit amet suscipit eros. Ut et urna in ex maximus ullamcorper. Donec at est purus. Curabitur sit amet massa a ipsum vestibulum euismod. Suspendisse aliquet purus eros, et dictum dui blandit sit amet. Donec velit nulla, tincidunt et pharetra eu, sagittis non ex. In consectetur pulvinar malesuada. Proin id commodo nisi. Vivamus nisl lorem, vestibulum sit amet convallis at, accumsan at lacus. Pellentesque at mauris nibh. Praesent facilisis sem sodales mauris sagittis vehicula. Fusce condimentum, justo a egestas lobortis, augue est sodales nulla, vel hendrerit ipsum enim in justo. Sed nulla odio, rhoncus eu enim eu, accumsan imperdiet libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget condimentum sem.

Curabitur non odio eu augue auctor consequat. Phasellus non vulputate purus. Cras et pharetra sem, ac volutpat risus. Cras lacinia quis leo a ultricies. Integer at aliquam nunc, sit amet aliquam lacus. Vestibulum dictum rhoncus cursus. Curabitur sit amet purus lorem. Mauris porttitor bibendum dapibus. Etiam feugiat lacus vel ipsum vulputate maximus.

Curabitur sapien nulla, ornare non felis sed, tempus sodales lorem. Aliquam tincidunt lorem ac volutpat rutrum. Praesent elementum gravida lacus, sit amet posuere justo fringilla in. Nunc vestibulum malesuada ullamcorper. Etiam lobortis sollicitudin diam at efficitur. Maecenas pretium nibh non mattis rutrum. Cras velit neque, porttitor et odio nec, iaculis ullamcorper tellus. Sed eu dui lobortis, porttitor elit non, laoreet est. Quisque eget porttitor sapien. Vivamus placerat, ligula et faucibus gravida, massa justo vehicula nulla, sit amet feugiat nulla nunc ut mi. Cras pharetra imperdiet laoreet. Morbi ultricies sapien sed fringilla vulputate. Ut facilisis, enim sit amet eleifend laoreet, lacus felis volutpat odio, ac sagittis massa nulla et elit. Integer tempus nisl vel tortor finibus iaculis.

Vestibulum vitae lacus rutrum, egestas mauris ultricies, feugiat sem. Aliquam erat volutpat. Phasellus lobortis faucibus elit, ut dapibus lectus mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus hendrerit dui felis, vel laoreet ipsum tincidunt nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et lacus auctor, sagittis purus id, commodo orci. In tellus ex, imperdiet ut odio sit amet, sollicitudin dictum ex.</p>
  </div>
);

export default Home;
