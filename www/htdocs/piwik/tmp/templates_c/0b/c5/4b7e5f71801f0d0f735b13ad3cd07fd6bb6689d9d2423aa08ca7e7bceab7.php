<?php

/* _jsGlobalVariables.twig */
class __TwigTemplate_0bc54b7e5f71801f0d0f735b13ad3cd07fd6bb6689d9d2423aa08ca7e7bceab7 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<script type=\"text/javascript\">
    var piwik = {};
    piwik.token_auth = \"";
        // line 3
        echo twig_escape_filter($this->env, (isset($context["token_auth"]) ? $context["token_auth"] : $this->getContext($context, "token_auth")), "html", null, true);
        echo "\";
    piwik.piwik_url = \"";
        // line 4
        echo twig_escape_filter($this->env, (isset($context["piwikUrl"]) ? $context["piwikUrl"] : $this->getContext($context, "piwikUrl")), "html", null, true);
        echo "\";
    ";
        // line 5
        if ((isset($context["userLogin"]) ? $context["userLogin"] : $this->getContext($context, "userLogin"))) {
            echo "piwik.userLogin = \"";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["userLogin"]) ? $context["userLogin"] : $this->getContext($context, "userLogin")), "js"), "html", null, true);
            echo "\";
    ";
        }
        // line 7
        echo "    ";
        if (array_key_exists("idSite", $context)) {
            echo "piwik.idSite = \"";
            echo twig_escape_filter($this->env, (isset($context["idSite"]) ? $context["idSite"] : $this->getContext($context, "idSite")), "html", null, true);
            echo "\";
    ";
        }
        // line 9
        echo "    ";
        if (array_key_exists("siteName", $context)) {
            echo "piwik.siteName = \"";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["siteName"]) ? $context["siteName"] : $this->getContext($context, "siteName")), "js"), "html", null, true);
            echo "\";
    ";
        }
        // line 11
        echo "    ";
        if (array_key_exists("siteMainUrl", $context)) {
            echo "piwik.siteMainUrl = \"";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["siteMainUrl"]) ? $context["siteMainUrl"] : $this->getContext($context, "siteMainUrl")), "js"), "html", null, true);
            echo "\";
    ";
        }
        // line 13
        echo "    ";
        if (array_key_exists("period", $context)) {
            echo "piwik.period = \"";
            echo twig_escape_filter($this->env, (isset($context["period"]) ? $context["period"] : $this->getContext($context, "period")), "html", null, true);
            echo "\";
    ";
        }
        // line 15
        echo "    ";
        // line 19
        echo "    piwik.currentDateString = \"";
        echo twig_escape_filter($this->env, ((array_key_exists("date", $context)) ? (_twig_default_filter((isset($context["date"]) ? $context["date"] : $this->getContext($context, "date")), ((array_key_exists("endDate", $context)) ? (_twig_default_filter((isset($context["endDate"]) ? $context["endDate"] : $this->getContext($context, "endDate")), "")) : ("")))) : (((array_key_exists("endDate", $context)) ? (_twig_default_filter((isset($context["endDate"]) ? $context["endDate"] : $this->getContext($context, "endDate")), "")) : ("")))), "html", null, true);
        echo "\";
    ";
        // line 20
        if (array_key_exists("startDate", $context)) {
            // line 21
            echo "    piwik.startDateString = \"";
            echo twig_escape_filter($this->env, (isset($context["startDate"]) ? $context["startDate"] : $this->getContext($context, "startDate")), "html", null, true);
            echo "\";
    piwik.endDateString = \"";
            // line 22
            echo twig_escape_filter($this->env, (isset($context["endDate"]) ? $context["endDate"] : $this->getContext($context, "endDate")), "html", null, true);
            echo "\";
    piwik.minDateYear = ";
            // line 23
            echo twig_escape_filter($this->env, (isset($context["minDateYear"]) ? $context["minDateYear"] : $this->getContext($context, "minDateYear")), "html", null, true);
            echo ";
    piwik.minDateMonth = parseInt(\"";
            // line 24
            echo twig_escape_filter($this->env, (isset($context["minDateMonth"]) ? $context["minDateMonth"] : $this->getContext($context, "minDateMonth")), "html", null, true);
            echo "\", 10);
    piwik.minDateDay = parseInt(\"";
            // line 25
            echo twig_escape_filter($this->env, (isset($context["minDateDay"]) ? $context["minDateDay"] : $this->getContext($context, "minDateDay")), "html", null, true);
            echo "\", 10);
    piwik.maxDateYear = ";
            // line 26
            echo twig_escape_filter($this->env, (isset($context["maxDateYear"]) ? $context["maxDateYear"] : $this->getContext($context, "maxDateYear")), "html", null, true);
            echo ";
    piwik.maxDateMonth = parseInt(\"";
            // line 27
            echo twig_escape_filter($this->env, (isset($context["maxDateMonth"]) ? $context["maxDateMonth"] : $this->getContext($context, "maxDateMonth")), "html", null, true);
            echo "\", 10);
    piwik.maxDateDay = parseInt(\"";
            // line 28
            echo twig_escape_filter($this->env, (isset($context["maxDateDay"]) ? $context["maxDateDay"] : $this->getContext($context, "maxDateDay")), "html", null, true);
            echo "\", 10);
    ";
        }
        // line 30
        echo "    ";
        if (array_key_exists("language", $context)) {
            echo "piwik.language = \"";
            echo twig_escape_filter($this->env, (isset($context["language"]) ? $context["language"] : $this->getContext($context, "language")), "html", null, true);
            echo "\";
    ";
        }
        // line 32
        echo "    ";
        if (array_key_exists("config_action_url_category_delimiter", $context)) {
            // line 33
            echo "    piwik.config = {};
    piwik.config.action_url_category_delimiter = \"";
            // line 34
            echo twig_escape_filter($this->env, (isset($context["config_action_url_category_delimiter"]) ? $context["config_action_url_category_delimiter"] : $this->getContext($context, "config_action_url_category_delimiter")), "html", null, true);
            echo "\";
    ";
        }
        // line 36
        echo "</script>
";
    }

    public function getTemplateName()
    {
        return "_jsGlobalVariables.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 36,  113 => 30,  108 => 28,  104 => 27,  96 => 25,  92 => 24,  88 => 23,  79 => 21,  77 => 20,  70 => 15,  62 => 13,  46 => 9,  31 => 5,  27 => 4,  23 => 3,  19 => 1,  134 => 43,  131 => 42,  127 => 34,  124 => 33,  121 => 32,  114 => 20,  112 => 19,  107 => 16,  105 => 15,  100 => 26,  87 => 9,  84 => 22,  81 => 7,  74 => 47,  72 => 19,  68 => 44,  66 => 42,  60 => 39,  55 => 36,  53 => 33,  50 => 32,  41 => 28,  38 => 7,  36 => 26,  32 => 24,  30 => 7,  22 => 1,  56 => 12,  54 => 11,  51 => 10,  47 => 31,  45 => 30,  42 => 6,  40 => 5,  37 => 4,  34 => 3,  29 => 2,);
    }
}
