# POC for migrating to monorepo 

# I Loading apps trough host app

start: `npm run host`

By starting the app you will get served a wrapper app, of `app1` and `app2` both apps support lazy loading router, without a problem.

Key moments:
 * Both apps must be provided in the host app by using `ModuleWithProviders` in order to avoid in order for the host to be able to load them
 * The apps can share state trough data-access libs (as seen in the counter field)
 * Both apps initialize own injection scope, so that services with same tokens don't override themselves but exist together, look at `initialize at` field
 * When there are matching paths in both application, the one loaded first will be displayed (try switching the lines of `App1SharedModule.forRoot()` and `App2SharedModule.forRoot()`)

# II Loading the apps separately

start: `npm run {{your project}}`

Key moments:
 * All apps have their own build process
 * After transferring the apps-specific and apps-common modules and services load them from one new host application 