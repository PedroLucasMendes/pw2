const setLangCookie = (req, res, next) => {
if (!('lang' in req.cookies)) res.cookie('lang', 'pt-BR');
next();
};
export default setLangCookie