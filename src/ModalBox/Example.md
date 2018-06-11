ModalBox with default props

```jsx
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open ModalBox</button>
  <ModalBox
    isOpen={state.isOpen}
    onClose={() => setState({ isOpen: false })}
    contentLabel="Demo Intro"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
  </ModalBox>
</div>;
```

ModalBox without close label

```jsx
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open ModalBox</button>
  <ModalBox
    isOpen={state.isOpen}
    onClose={() => setState({ isOpen: false })}
    contentLabel="Demo Intro"
    noCloseLabel
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
  </ModalBox>
</div>;
```

ModalBox with a lot of content

```jsx
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open ModalBox</button>
  <ModalBox
    isOpen={state.isOpen}
    onClose={() => setState({ isOpen: false })}
    contentLabel="Demo Intro"
    tall
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur, sit
      doloremque possimus temporibus laborum voluptate aut, neque, rem hic libero quo facere magni.
      Nemo quod nulla culpa natus esse!
    </p>
  </ModalBox>
</div>;
```
