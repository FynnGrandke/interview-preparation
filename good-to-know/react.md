# React

## Reconciliation

Reacts diffing algorithm to decide which node has to be updated in the virtual dom. 

## Virtual DOM

The virtual DOM (VDOM) is an in-memory representation of the real DOM. The representation of an UI is kept in memory and synced with the “real” DOM. 

## Shadow DOM

The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. 

## Interaction Manager 

The `InteractionManager` is the native module responsible for deferring the execution of a function until an “interaction” has finished.

There is a JavaScript UI thread which handles drawing updates to the screen, and another thread used for all tasks not related to the UI thread. Since there is only one thread for making UI updates, it can get busy and thus drop frames, especially during things like navigation screen animations etc.. The `InteractionManager`is used to ensure that functions are executed after these animations occur, so that frames are not dropped on the UI thread.