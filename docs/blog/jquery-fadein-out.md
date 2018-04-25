# jquery 中fade-out与fade-in的坑

fade-in/out是jquery中实现淡入淡出效果的函数，本质是只是在show/hide的基础上添加了淡入淡出的动画，使操作平滑，
并没有从页面中移除dom，之前理解错了，以为这个能移除dom，果然移除dom的话还是用remove方法
