//setting state the right way using a callback
//old state available via calback st.property
//NEVER change the STATE DIRECTLY!

this.setState(st => {
    return {}
});

//mutating an array the right way

this.setState(st => {
    return {
        nums: [...this.state.nums, newItem]
    }
})

this.setState(st => {
    return {
        nums: st.nums.map(n => something) //creates a new array again
}});
