const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User=require('../models/UserAuthModel')

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
    
      done(null,profile)
      
       User.findOne({ Id: profile.id }).then((existingUser) => {
        if (!existingUser) {
          new User({
         Id: profile.id,
            username: profile.displayName,
            firstName:profile.name.givenName,
            lastName:profile.name.familyName,
            profilePhoto:profile.photos[0].value,
            provider:profile.provider
          }).save()     
        } 
      });

       
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
  
      User.findOne({ Id: profile.id }).then((existingUser) => {
        if (!existingUser) {
          new User({
            Id: profile.id,
            username: profile.displayName,
           profilePhoto:profile.photos[0].value,
           provider:profile.provider
          }).save()     
        } 
      });
      
      
    }
  )
);