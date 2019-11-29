# coding: utf-8

first_user = User.create! fname: 'Hugo', lname: 'Sánchez', uname: 'hugol', passwd: 'some_pass', active: true

post_1 = Post.create! title: "Learn Ruby", made_at: Time.current,  user_id: first_user.id, post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

post_2 = Post.create! title: "Learn Rails", made_at: Time.current, user_id: first_user.id, post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

post_3 = Post.create! title: "Learn React", made_at: Time.current, user_id: first_user.id, post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

comment_1  = Comment.create! comment: 'Test Eins Neerland gesichte',          post_id: post_1.id, user_id: first_user.id
comment_2  = Comment.create! comment: 'Test Zweig Mexikan Neerland gesichte', post_id: post_1.id, user_id: first_user.id
comment_3  = Comment.create! comment: 'Test Drei brasilianische Wirtschaft',  post_id: post_1.id, user_id: first_user.id

