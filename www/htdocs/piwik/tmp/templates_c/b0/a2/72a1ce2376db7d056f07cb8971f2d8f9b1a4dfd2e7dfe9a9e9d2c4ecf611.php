<?php

/* @SitesManager/index.twig */
class __TwigTemplate_b0a272a1ce2376db7d056f07cb8971f2d8f9b1a4dfd2e7dfe9a9e9d2c4ecf611 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("admin.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "admin.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        $context["piwik"] = $this->env->loadTemplate("macros.twig");
        // line 5
        echo "    ";
        $context["ajax"] = $this->env->loadTemplate("ajaxMacros.twig");
        // line 6
        echo "
    ";
        // line 7
        ob_start();
        // line 8
        echo "        ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_HelpExcludedIps", "1.2.3.*", "1.2.*.*")), "html", null, true);
        echo "
        <br/><br/>
        ";
        // line 10
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_YourCurrentIpAddressIs", (("<i>" . (isset($context["currentIpAddress"]) ? $context["currentIpAddress"] : $this->getContext($context, "currentIpAddress"))) . "</i>")));
        echo "
    ";
        $context["excludedIpHelpPlain"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 12
        echo "
    ";
        // line 13
        $context["excludedIpHelp"] = $context["piwik"]->getinlineHelp((isset($context["excludedIpHelpPlain"]) ? $context["excludedIpHelpPlain"] : $this->getContext($context, "excludedIpHelpPlain")));
        // line 14
        echo "
    ";
        // line 15
        ob_start();
        // line 16
        echo "        ";
        if ((isset($context["timezoneSupported"]) ? $context["timezoneSupported"] : $this->getContext($context, "timezoneSupported"))) {
            // line 17
            echo "            ";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ChooseCityInSameTimezoneAsYou")), "html", null, true);
            echo "
        ";
        } else {
            // line 19
            echo "            ";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_AdvancedTimezoneSupportNotFound")), "html", null, true);
            echo "
        ";
        }
        // line 21
        echo "        <br/><br/>
        ";
        // line 22
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_UTCTimeIs", (isset($context["utcTime"]) ? $context["utcTime"] : $this->getContext($context, "utcTime")))), "html", null, true);
        echo "
    ";
        $context["defaultTimezoneHelpPlain"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 24
        echo "
    ";
        // line 25
        ob_start();
        // line 26
        echo "        ";
        echo twig_escape_filter($this->env, (isset($context["defaultTimezoneHelpPlain"]) ? $context["defaultTimezoneHelpPlain"] : $this->getContext($context, "defaultTimezoneHelpPlain")), "html", null, true);
        echo "
        <br/><br/>
        ";
        // line 28
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ChangingYourTimezoneWillOnlyAffectDataForward")), "html", null, true);
        echo "
    ";
        $context["timezoneHelpPlain"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 30
        echo "
    ";
        // line 31
        ob_start();
        // line 32
        echo "        ";
        echo $context["piwik"]->getinlineHelp(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_CurrencySymbolWillBeUsedForGoals")));
        echo "
    ";
        $context["currencyHelpPlain"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 34
        echo "
    ";
        // line 35
        ob_start();
        // line 36
        echo "        ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_EcommerceHelp")), "html", null, true);
        echo "
        <br/>
        ";
        // line 38
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_PiwikOffersEcommerceAnalytics", "<a href='http://piwik.org/docs/ecommerce-analytics/' target='_blank'>", "</a>"));
        echo "
    ";
        $context["ecommerceHelpPlain"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 40
        echo "
    ";
        // line 41
        ob_start();
        // line 42
        echo "        ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ListOfQueryParametersToExclude")), "html", null, true);
        echo "
        <br/><br/>
        ";
        // line 44
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_PiwikWillAutomaticallyExcludeCommonSessionParameters", "phpsessid, sessionid, ...")), "html", null, true);
        echo "
    ";
        $context["excludedQueryParametersHelp"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 46
        echo "
    ";
        // line 47
        $context["excludedQueryParametersHelp"] = $context["piwik"]->getinlineHelp((isset($context["excludedQueryParametersHelp"]) ? $context["excludedQueryParametersHelp"] : $this->getContext($context, "excludedQueryParametersHelp")));
        // line 48
        echo "
    ";
        // line 49
        ob_start();
        // line 50
        echo "        ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalExcludedUserAgentHelp1")), "html", null, true);
        echo "
        <br/><br/>
        ";
        // line 52
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalListExcludedUserAgents_Desc")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalExcludedUserAgentHelp2")), "html", null, true);
        echo "
    ";
        $context["excludedUserAgentsHelp"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 54
        echo "
    ";
        // line 55
        $context["excludedUserAgentsHelp"] = $context["piwik"]->getinlineHelp((isset($context["excludedUserAgentsHelp"]) ? $context["excludedUserAgentsHelp"] : $this->getContext($context, "excludedUserAgentsHelp")));
        // line 56
        echo "
    ";
        // line 57
        ob_start();
        // line 58
        echo "        <h4 style=\"display:inline-block;\">";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_KeepURLFragmentsLong")), "html", null, true);
        echo "</h4>

        <select id=\"keepURLFragmentSelect\">
            <option value=\"0\"> ";
        // line 61
        if ((isset($context["globalKeepURLFragments"]) ? $context["globalKeepURLFragments"] : $this->getContext($context, "globalKeepURLFragments"))) {
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Yes")), "html", null, true);
        } else {
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_No")), "html", null, true);
        }
        // line 62
        echo "                (";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Default")), "html", null, true);
        echo ")
            </option>
            <option value=\"1\">";
        // line 64
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Yes")), "html", null, true);
        echo "</option>
            <option value=\"2\">";
        // line 65
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_No")), "html", null, true);
        echo "</option>
        </select>
    ";
        $context["keepURLFragmentSelectHTML"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 68
        echo "
    <script type=\"text/javascript\">
        var excludedIpHelp = '";
        // line 70
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["excludedIpHelp"]) ? $context["excludedIpHelp"] : $this->getContext($context, "excludedIpHelp")), "js"), "html", null, true);
        echo "';
        var aliasUrlsHelp = '";
        // line 71
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["piwik"]->getinlineHelp(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_AliasUrlHelp"))), "js"), "html", null, true);
        echo "';
        var excludedQueryParametersHelp = '";
        // line 72
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["excludedQueryParametersHelp"]) ? $context["excludedQueryParametersHelp"] : $this->getContext($context, "excludedQueryParametersHelp")), "js"), "html", null, true);
        echo "';
        var excludedUserAgentsHelp = '";
        // line 73
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["excludedUserAgentsHelp"]) ? $context["excludedUserAgentsHelp"] : $this->getContext($context, "excludedUserAgentsHelp")), "js"), "html", null, true);
        echo "';
        var timezoneHelp = '";
        // line 74
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["piwik"]->getinlineHelp((isset($context["timezoneHelpPlain"]) ? $context["timezoneHelpPlain"] : $this->getContext($context, "timezoneHelpPlain"))), "js"), "html", null, true);
        echo "';
        var currencyHelp = '";
        // line 75
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["currencyHelpPlain"]) ? $context["currencyHelpPlain"] : $this->getContext($context, "currencyHelpPlain")), "js"), "html", null, true);
        echo "';
        var ecommerceHelp = '";
        // line 76
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["piwik"]->getinlineHelp((isset($context["ecommerceHelpPlain"]) ? $context["ecommerceHelpPlain"] : $this->getContext($context, "ecommerceHelpPlain"))), "js"), "html", null, true);
        echo "';
        var ecommerceEnabled = '";
        // line 77
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_EnableEcommerce")), "js"), "html", null, true);
        echo "';
        var ecommerceDisabled = '";
        // line 78
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_NotAnEcommerceSite")), "js"), "html", null, true);
        echo "';
        ";
        // line 79
        $context["defaultTimezoneHelp"] = $context["piwik"]->getinlineHelp((isset($context["defaultTimezoneHelpPlain"]) ? $context["defaultTimezoneHelpPlain"] : $this->getContext($context, "defaultTimezoneHelpPlain")));
        // line 80
        echo "        ";
        $context["searchKeywordHelp"] = $context["piwik"]->getinlineHelp(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchKeywordParametersDesc")));
        // line 81
        echo "        ";
        ob_start();
        // line 82
        echo "        ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("Goals_Optional")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchCategoryParametersDesc")), "html", null, true);
        echo "
        ";
        $context["searchCategoryHelpText"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 84
        echo "        ";
        $context["searchCategoryHelp"] = $context["piwik"]->getinlineHelp((isset($context["searchCategoryHelpText"]) ? $context["searchCategoryHelpText"] : $this->getContext($context, "searchCategoryHelpText")));
        // line 85
        echo "        var sitesearchEnabled = '";
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_EnableSiteSearch")), "js"), "html", null, true);
        echo "';
        var sitesearchDisabled = '";
        // line 86
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_DisableSiteSearch")), "js"), "html", null, true);
        echo "';
        var searchKeywordHelp = '";
        // line 87
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["searchKeywordHelp"]) ? $context["searchKeywordHelp"] : $this->getContext($context, "searchKeywordHelp")), "js"), "html", null, true);
        echo "';
        var searchCategoryHelp = '";
        // line 88
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["searchCategoryHelp"]) ? $context["searchCategoryHelp"] : $this->getContext($context, "searchCategoryHelp")), "js"), "html", null, true);
        echo "';
        var sitesearchDesc = '";
        // line 89
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_TrackingSiteSearch")), "js"), "html", null, true);
        echo "';
        var keepURLFragmentSelectHTML = '";
        // line 90
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["keepURLFragmentSelectHTML"]) ? $context["keepURLFragmentSelectHTML"] : $this->getContext($context, "keepURLFragmentSelectHTML")), "js"), "html", null, true);
        echo "';

        var sitesManager = new SitesManager(";
        // line 92
        echo (isset($context["timezones"]) ? $context["timezones"] : $this->getContext($context, "timezones"));
        echo ", ";
        echo (isset($context["currencies"]) ? $context["currencies"] : $this->getContext($context, "currencies"));
        echo ", '";
        echo (isset($context["defaultTimezone"]) ? $context["defaultTimezone"] : $this->getContext($context, "defaultTimezone"));
        echo "', '";
        echo (isset($context["defaultCurrency"]) ? $context["defaultCurrency"] : $this->getContext($context, "defaultCurrency"));
        echo "');
        ";
        // line 93
        $context["searchKeywordLabel"] = call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchKeywordLabel"));
        // line 94
        echo "        ";
        $context["searchCategoryLabel"] = call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchCategoryLabel"));
        // line 95
        echo "        var searchKeywordLabel = '";
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["searchKeywordLabel"]) ? $context["searchKeywordLabel"] : $this->getContext($context, "searchKeywordLabel")), "js"), "html", null, true);
        echo "';
        var searchCategoryLabel = '";
        // line 96
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["searchCategoryLabel"]) ? $context["searchCategoryLabel"] : $this->getContext($context, "searchCategoryLabel")), "js"), "html", null, true);
        echo "';
        ";
        // line 97
        $context["sitesearchIntro"] = call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SiteSearchUse"));
        // line 98
        echo "        var sitesearchIntro = '";
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["piwik"]->getinlineHelp((isset($context["sitesearchIntro"]) ? $context["sitesearchIntro"] : $this->getContext($context, "sitesearchIntro"))), "js"), "html", null, true);
        echo "';
        var sitesearchUseDefault = '";
        // line 99
        if ((isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser"))) {
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchUseDefault", "<a href=\"#globalSiteSearch\">", "</a>")), "js"), "html", null, true);
        } else {
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchUseDefault", "", "")), "js"), "html", null, true);
        }
        echo "';
        var strDefault = '";
        // line 100
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Default")), "js"), "html", null, true);
        echo "';

        \$(function () {
            sitesManager.init();
        });
    </script>

    <h2>";
        // line 107
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_WebsitesManagement")), "html", null, true);
        echo "</h2>
    <p>";
        // line 108
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_MainDescription")), "html", null, true);
        echo "
        ";
        // line 109
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_YouCurrentlyHaveAccessToNWebsites", (("<strong>" . (isset($context["adminSitesCount"]) ? $context["adminSitesCount"] : $this->getContext($context, "adminSitesCount"))) . "</strong>")));
        echo "
        ";
        // line 110
        if ((isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser"))) {
            // line 111
            echo "            <br/>
            ";
            // line 112
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SuperUserCan", "<a href='#globalSettings'>", "</a>"));
            echo "
        ";
        }
        // line 114
        echo "    </p>
    ";
        // line 115
        echo $context["ajax"]->geterrorDiv();
        echo "
    ";
        // line 116
        echo $context["ajax"]->getloadingDiv();
        echo "

    ";
        // line 118
        ob_start();
        // line 119
        echo "        <a href=\"javascript:\" class=\"addRowSite\">
            ";
        // line 120
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_AddSite")), "html", null, true);
        echo "
        </a>
    ";
        $context["createNewWebsite"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 123
        echo "
    ";
        // line 124
        if ((twig_length_filter($this->env, (isset($context["adminSites"]) ? $context["adminSites"] : $this->getContext($context, "adminSites"))) == 0)) {
            // line 125
            echo "        ";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_NoWebsites")), "html", null, true);
            echo "
    ";
        } else {
            // line 127
            echo "
        <div class=\"ui-confirm\" id=\"confirm\">
            <h2></h2>
            <input role=\"yes\" type=\"button\" value=\"";
            // line 130
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Yes")), "html", null, true);
            echo "\"/>
            <input role=\"no\" type=\"button\" value=\"";
            // line 131
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_No")), "html", null, true);
            echo "\"/>
        </div>
        <div class=\"entityContainer\">
            ";
            // line 134
            if ((isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser"))) {
                // line 135
                echo "                ";
                echo twig_escape_filter($this->env, (isset($context["createNewWebsite"]) ? $context["createNewWebsite"] : $this->getContext($context, "createNewWebsite")), "html", null, true);
                echo "
            ";
            }
            // line 137
            echo "            <table class=\"entityTable dataTable\" id=\"editSites\">
                <thead>
                <tr>
                    <th>";
            // line 140
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Id")), "html", null, true);
            echo "</th>
                    <th>";
            // line 141
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Name")), "html", null, true);
            echo "</th>
                    <th>";
            // line 142
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_Urls")), "html", null, true);
            echo "</th>
                    <th>";
            // line 143
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ExcludedIps")), "html", null, true);
            echo "</th>
                    <th>";
            // line 144
            echo strtr(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ExcludedParameters")), array(" " => "<br />"));
            echo "</th>
                    <th id='exclude-user-agent-header'
                        ";
            // line 146
            if ((!(isset($context["allowSiteSpecificUserAgentExclude"]) ? $context["allowSiteSpecificUserAgentExclude"] : $this->getContext($context, "allowSiteSpecificUserAgentExclude")))) {
                echo "style=\"display:none;\"";
            }
            echo ">";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ExcludedUserAgents")), "html", null, true);
            echo "</th>
                    <th>";
            // line 147
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("Actions_SubmenuSitesearch")), "html", null, true);
            echo "</th>
                    <th>";
            // line 148
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_Timezone")), "html", null, true);
            echo "</th>
                    <th>";
            // line 149
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_Currency")), "html", null, true);
            echo "</th>
                    <th>";
            // line 150
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("Goals_Ecommerce")), "html", null, true);
            echo "</th>
                    <th></th>
                    <th></th>
                    <th>";
            // line 153
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_JsTrackingTag")), "html", null, true);
            echo "</th>
                </tr>
                </thead>
                <tbody>
                ";
            // line 157
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["adminSites"]) ? $context["adminSites"] : $this->getContext($context, "adminSites")));
            foreach ($context['_seq'] as $context["i"] => $context["site"]) {
                // line 158
                echo "                    <tr id=\"row";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "idsite"), "html", null, true);
                echo "\" data-keep-url-fragments=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "keep_url_fragment"), "html", null, true);
                echo "\">
                        <td id=\"idSite\">";
                // line 159
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "idsite"), "html", null, true);
                echo "</td>
                        <td id=\"siteName\" class=\"editableSite\">";
                // line 161
                echo $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "name");
                // line 162
                echo "</td>
                        <td id=\"urls\" class=\"editableSite\">";
                // line 164
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "alias_urls"));
                foreach ($context['_seq'] as $context["_key"] => $context["url"]) {
                    // line 165
                    echo strtr(trim((isset($context["url"]) ? $context["url"] : $this->getContext($context, "url"))), array("http://" => ""));
                    echo "<br />";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['url'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 167
                echo "</td>
                        <td id=\"excludedIps\" class=\"editableSite\">";
                // line 169
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "excluded_ips"));
                foreach ($context['_seq'] as $context["_key"] => $context["ip"]) {
                    // line 170
                    echo twig_escape_filter($this->env, (isset($context["ip"]) ? $context["ip"] : $this->getContext($context, "ip")), "html", null, true);
                    echo "<br/>";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ip'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 172
                echo "</td>
                        <td id=\"excludedQueryParameters\" class=\"editableSite\">";
                // line 174
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "excluded_parameters"));
                foreach ($context['_seq'] as $context["_key"] => $context["parameter"]) {
                    // line 175
                    echo (isset($context["parameter"]) ? $context["parameter"] : $this->getContext($context, "parameter"));
                    echo "<br />";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['parameter'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 177
                echo "</td>
                        <td id=\"excludedUserAgents\" class=\"editableSite\"
                            ";
                // line 179
                if ((!(isset($context["allowSiteSpecificUserAgentExclude"]) ? $context["allowSiteSpecificUserAgentExclude"] : $this->getContext($context, "allowSiteSpecificUserAgentExclude")))) {
                    echo "style=\"display:none;\"";
                }
                echo ">";
                // line 180
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "excluded_user_agents"));
                foreach ($context['_seq'] as $context["_key"] => $context["ua"]) {
                    // line 181
                    echo (isset($context["ua"]) ? $context["ua"] : $this->getContext($context, "ua"));
                    echo "<br />";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ua'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 183
                echo "</td>
                        <td id=\"sitesearch\" class=\"editableSite\">
                            ";
                // line 185
                if ($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "sitesearch")) {
                    // line 186
                    echo "                                <span class=\"sitesearchActive\">";
                    echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Yes")), "html", null, true);
                    echo "</span>
                            ";
                } else {
                    // line 188
                    echo "                                <span class=\"sitesearchInactive\">-</span>
                            ";
                }
                // line 190
                echo "                            <span class=\"sskp\" sitesearch_keyword_parameters=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "sitesearch_keyword_parameters"), "html", null, true);
                echo "\"
                                sitesearch_category_parameters=\"";
                // line 191
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "sitesearch_category_parameters"), "html", null, true);
                echo "\"
                                id=\"sitesearch_parameters\">
                            </span>
                        </td>
                        <td id=\"timezone\" class=\"editableSite\">";
                // line 195
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "timezone"), "html", null, true);
                echo "</td>
                        <td id=\"currency\" class=\"editableSite\">";
                // line 196
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "currency"), "html", null, true);
                echo "</td>
                        <td id=\"ecommerce\" class=\"editableSite\">
                            ";
                // line 198
                if ($this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "ecommerce")) {
                    // line 199
                    echo "                                <span class='ecommerceActive'>";
                    echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Yes")), "html", null, true);
                    echo "</span>
                            ";
                } else {
                    // line 201
                    echo "                                <span class='ecommerceInactive'>-</span>
                            ";
                }
                // line 203
                echo "                        </td>
                        <td>
                    <span id=\"row";
                // line 205
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "idsite"), "html", null, true);
                echo "\" class='editSite link_but'>
                        <img src='plugins/Zeitgeist/images/ico_edit.png' title=\"";
                // line 206
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Edit")), "html", null, true);
                echo "\"
                             border=\"0\"/>
                        <span>";
                // line 208
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Edit")), "html", null, true);
                echo "</span>
                    </span>
                        </td>
                        <td>
                    <span id=\"row";
                // line 212
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "idsite"), "html", null, true);
                echo "\" class=\"deleteSite link_but\">
                        <img src='plugins/Zeitgeist/images/ico_delete.png' title=\"";
                // line 213
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Delete")), "html", null, true);
                echo "\"
                             border=\"0\"/>
                        <span>";
                // line 215
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Delete")), "html", null, true);
                echo "</span>
                    </span>
                        </td>
                        <td>
                            <a href='";
                // line 219
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFunction('linkTo')->getCallable(), array(array("module" => "CoreAdminHome", "action" => "trackingCodeGenerator", "idSite" => $this->getAttribute((isset($context["site"]) ? $context["site"] : $this->getContext($context, "site")), "idsite"), "updated" => false))), "html", null, true);
                echo "'>
                                ";
                // line 220
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ShowTrackingTag")), "html", null, true);
                echo "
                            </a>
                        </td>
                    </tr>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['i'], $context['site'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 225
            echo "                </tbody>
            </table>
            ";
            // line 227
            if ((isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser"))) {
                // line 228
                echo "                ";
                echo twig_escape_filter($this->env, (isset($context["createNewWebsite"]) ? $context["createNewWebsite"] : $this->getContext($context, "createNewWebsite")), "html", null, true);
                echo "
            ";
            }
            // line 230
            echo "        </div>
    ";
        }
        // line 232
        echo "
    ";
        // line 234
        echo "    ";
        if ((!(isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser")))) {
            // line 235
            echo "        <input type=\"hidden\" size=\"15\" id=\"globalSearchKeywordParameters\"
               value=\"";
            // line 236
            echo twig_escape_filter($this->env, (isset($context["globalSearchKeywordParameters"]) ? $context["globalSearchKeywordParameters"] : $this->getContext($context, "globalSearchKeywordParameters")), "html", null, true);
            echo "\"/>
        <input type=\"hidden\" size=\"15\" id=\"globalSearchCategoryParameters\"
               value=\"";
            // line 238
            echo twig_escape_filter($this->env, (isset($context["globalSearchCategoryParameters"]) ? $context["globalSearchCategoryParameters"] : $this->getContext($context, "globalSearchCategoryParameters")), "html", null, true);
            echo "\"/>
    ";
        }
        // line 240
        echo "
    ";
        // line 241
        if ((isset($context["isSuperUser"]) ? $context["isSuperUser"] : $this->getContext($context, "isSuperUser"))) {
            // line 242
            echo "        <br/>

        <h2 id=\"globalSettings\">";
            // line 244
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalWebsitesSettings")), "html", null, true);
            echo "</h2>
        <br/>
        <table style=\"width:600px;\" class=\"adminTable\">

            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 250
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalListExcludedIps")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 252
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ListOfIpsToBeExcludedOnAllWebsites")), "html", null, true);
            echo " </p>
                </td>
            </tr>
            <tr>
                <td>
                    <textarea cols=\"30\" rows=\"3\" id=\"globalExcludedIps\">";
            // line 258
            echo twig_escape_filter($this->env, (isset($context["globalExcludedIps"]) ? $context["globalExcludedIps"] : $this->getContext($context, "globalExcludedIps")), "html", null, true);
            // line 259
            echo "</textarea>
                </td>
                <td>
                    <label for=\"globalExcludedIps\">";
            // line 262
            echo twig_escape_filter($this->env, (isset($context["excludedIpHelp"]) ? $context["excludedIpHelp"] : $this->getContext($context, "excludedIpHelp")), "html", null, true);
            echo "</label>
                </td>
            </tr>

            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 268
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalListExcludedQueryParameters")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 270
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_ListOfQueryParametersToBeExcludedOnAllWebsites")), "html", null, true);
            echo " </p>
                </td>
            </tr>

            <tr>
                <td>
                    <textarea cols=\"30\" rows=\"3\" id=\"globalExcludedQueryParameters\">";
            // line 277
            echo twig_escape_filter($this->env, (isset($context["globalExcludedQueryParameters"]) ? $context["globalExcludedQueryParameters"] : $this->getContext($context, "globalExcludedQueryParameters")), "html", null, true);
            // line 278
            echo "</textarea>
                </td>
                <td>
                    <label for=\"globalExcludedQueryParameters\">";
            // line 281
            echo twig_escape_filter($this->env, (isset($context["excludedQueryParametersHelp"]) ? $context["excludedQueryParametersHelp"] : $this->getContext($context, "excludedQueryParametersHelp")), "html", null, true);
            echo "</label>
                </td>
            </tr>

            ";
            // line 286
            echo "            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 288
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalListExcludedUserAgents")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 290
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_GlobalListExcludedUserAgents_Desc")), "html", null, true);
            echo "</p>
                </td>
            </tr>

            <tr>
                <td>
                    <textarea cols=\"30\" rows=\"3\" id=\"globalExcludedUserAgents\">";
            // line 297
            echo twig_escape_filter($this->env, (isset($context["globalExcludedUserAgents"]) ? $context["globalExcludedUserAgents"] : $this->getContext($context, "globalExcludedUserAgents")), "html", null, true);
            // line 298
            echo "</textarea>
                </td>
                <td><label for=\"globalExcludedUserAgents\">";
            // line 300
            echo twig_escape_filter($this->env, (isset($context["excludedUserAgentsHelp"]) ? $context["excludedUserAgentsHelp"] : $this->getContext($context, "excludedUserAgentsHelp")), "html", null, true);
            echo "</label>
                </td>
            </tr>

            <tr>
                <td>
                    <input type=\"checkbox\" id=\"enableSiteUserAgentExclude\" name=\"enableSiteUserAgentExclude\"
                           ";
            // line 307
            if ((isset($context["allowSiteSpecificUserAgentExclude"]) ? $context["allowSiteSpecificUserAgentExclude"] : $this->getContext($context, "allowSiteSpecificUserAgentExclude"))) {
                echo "checked=\"checked\"";
            }
            echo "/>
                    <label for=\"enableSiteUserAgentExclude\">
                        ";
            // line 309
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_EnableSiteSpecificUserAgentExclude")), "html", null, true);
            echo "
                    </label>
            <span id=\"enableSiteUserAgentExclude-loading\" class=\"loadingPiwik\" style=\"display:none;\">
                <img src=\"plugins/Zeitgeist/images/loading-blue.gif\"/>
            </span>
                </td>
                <td>
                    ";
            // line 316
            echo $context["piwik"]->getinlineHelp(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_EnableSiteSpecificUserAgentExclude_Help", "<a href=\"#editSites\">", "</a>")));
            echo "
                </td>
            </tr>

            ";
            // line 321
            echo "            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 323
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_KeepURLFragments")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 325
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_KeepURLFragmentsHelp", "<em>#</em>", "<em>example.org/index.html#first_section</em>", "<em>example.org/index.html</em>"));
            echo "
                    </p>
                    <input type=\"checkbox\" id=\"globalKeepURLFragments\" name=\"globalKeepURLFragments\"
                           ";
            // line 328
            if ((isset($context["globalKeepURLFragments"]) ? $context["globalKeepURLFragments"] : $this->getContext($context, "globalKeepURLFragments"))) {
                echo "checked=\"checked\"";
            }
            echo "/>
                    <label for=\"globalKeepURLFragments\">";
            // line 329
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_KeepURLFragmentsLong")), "html", null, true);
            echo "</label>

                    <p>";
            // line 331
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_KeepURLFragmentsHelp2")), "html", null, true);
            echo "</p>
                </td>
            </tr>

            ";
            // line 336
            echo "            <tr>
                <td colspan=\"2\">
                    <strong id=\"globalSiteSearch\">";
            // line 338
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_TrackingSiteSearch")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 340
            echo twig_escape_filter($this->env, (isset($context["sitesearchIntro"]) ? $context["sitesearchIntro"] : $this->getContext($context, "sitesearchIntro")), "html", null, true);
            echo "</p>
            <span class=\"form-description\" style=\"font-size:8pt;\">
                ";
            // line 342
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchParametersNote")), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchParametersNote2")), "html", null, true);
            echo "
            </span>
                </td>
            </tr>
            <tr>
                <td colspan=\"2\">
                    <label>";
            // line 348
            echo twig_escape_filter($this->env, (isset($context["searchKeywordLabel"]) ? $context["searchKeywordLabel"] : $this->getContext($context, "searchKeywordLabel")), "html", null, true);
            echo " &nbsp;
                        <input type=\"text\" size=\"15\" id=\"globalSearchKeywordParameters\"
                               value=\"";
            // line 350
            echo (isset($context["globalSearchKeywordParameters"]) ? $context["globalSearchKeywordParameters"] : $this->getContext($context, "globalSearchKeywordParameters"));
            echo "\"/>

                        <div style='width: 200px;float:right;'>";
            // line 352
            echo twig_escape_filter($this->env, (isset($context["searchKeywordHelp"]) ? $context["searchKeywordHelp"] : $this->getContext($context, "searchKeywordHelp")), "html", null, true);
            echo "</div>
                    </label>
                </td>
            </tr>

            <tr>
                <td colspan=\"2\">
                    ";
            // line 359
            if ((!(isset($context["isSearchCategoryTrackingEnabled"]) ? $context["isSearchCategoryTrackingEnabled"] : $this->getContext($context, "isSearchCategoryTrackingEnabled")))) {
                // line 360
                echo "                    <input value='globalSearchCategoryParametersIsDisabled' id=\"globalSearchCategoryParameters\"
                           type='hidden'/>
                    <span class='form-description'>Note: you could also track your Internal Search Engine Categories, but the plugin Custom Variables is required. Please enable the plugin CustomVariables (or ask your Piwik admin).</span>
                    ";
            } else {
                // line 364
                echo "                    ";
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("Goals_Optional")), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SearchCategoryDesc")), "html", null, true);
                echo " <br/>
                </td>
            </tr>
            <tr>
                <td colspan=\"2\">
                    <label>";
                // line 369
                echo twig_escape_filter($this->env, (isset($context["searchCategoryLabel"]) ? $context["searchCategoryLabel"] : $this->getContext($context, "searchCategoryLabel")), "html", null, true);
                echo "  &nbsp;
                        <input type=\"text\" size=\"15\" id=\"globalSearchCategoryParameters\"
                               value=\"";
                // line 371
                echo (isset($context["globalSearchCategoryParameters"]) ? $context["globalSearchCategoryParameters"] : $this->getContext($context, "globalSearchCategoryParameters"));
                echo "\"/>

                        <div style='width: 200px;float:right;'>";
                // line 373
                echo twig_escape_filter($this->env, (isset($context["searchCategoryHelp"]) ? $context["searchCategoryHelp"] : $this->getContext($context, "searchCategoryHelp")), "html", null, true);
                echo "</div>
                    </label>
                    ";
            }
            // line 376
            echo "                </td>
            </tr>

            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 381
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_DefaultTimezoneForNewWebsites")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 383
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SelectDefaultTimezone")), "html", null, true);
            echo " </p>
                </td>
            </tr>
            <tr>
                <td>
                    <div id='defaultTimezone'></div>
                </td>
                <td>
                    ";
            // line 391
            echo twig_escape_filter($this->env, (isset($context["defaultTimezoneHelp"]) ? $context["defaultTimezoneHelp"] : $this->getContext($context, "defaultTimezoneHelp")), "html", null, true);
            echo "
                </td>
            </tr>

            <tr>
                <td colspan=\"2\">
                    <strong>";
            // line 397
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_DefaultCurrencyForNewWebsites")), "html", null, true);
            echo "</strong>

                    <p>";
            // line 399
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("SitesManager_SelectDefaultCurrency")), "html", null, true);
            echo "</p>
                </td>
            </tr>
            <tr>
                <td>
                    <div id='defaultCurrency'></div>
                </td>
                <td>
                    ";
            // line 407
            echo twig_escape_filter($this->env, (isset($context["currencyHelpPlain"]) ? $context["currencyHelpPlain"] : $this->getContext($context, "currencyHelpPlain")), "html", null, true);
            echo "
                </td>
            </tr>
        </table>
        <span style=\"margin-left:20px;\">
    <input type=\"submit\" class=\"submit\" id='globalSettingsSubmit' value=\"";
            // line 412
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Save")), "html", null, true);
            echo "\"/>
</span>
        ";
            // line 414
            echo $context["ajax"]->geterrorDiv("ajaxErrorGlobalSettings");
            echo "
        ";
            // line 415
            echo $context["ajax"]->getloadingDiv("ajaxLoadingGlobalSettings");
            echo "
    ";
        }
        // line 417
        echo "    ";
        if ((isset($context["showAddSite"]) ? $context["showAddSite"] : $this->getContext($context, "showAddSite"))) {
            // line 418
            echo "        <script type=\"text/javascript\">
            \$(document).ready(function () {
                \$('.addRowSite:first').trigger('click');
            });
        </script>
    ";
        }
        // line 424
        echo "
    <br/><br/><br/><br/>
";
    }

    public function getTemplateName()
    {
        return "@SitesManager/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1020 => 424,  1012 => 418,  1009 => 417,  1004 => 415,  1000 => 414,  995 => 412,  987 => 407,  976 => 399,  971 => 397,  962 => 391,  951 => 383,  946 => 381,  939 => 376,  933 => 373,  928 => 371,  923 => 369,  912 => 364,  906 => 360,  904 => 359,  894 => 352,  889 => 350,  884 => 348,  873 => 342,  868 => 340,  863 => 338,  859 => 336,  852 => 331,  847 => 329,  841 => 328,  835 => 325,  830 => 323,  826 => 321,  819 => 316,  809 => 309,  802 => 307,  792 => 300,  788 => 298,  786 => 297,  777 => 290,  772 => 288,  768 => 286,  761 => 281,  756 => 278,  754 => 277,  745 => 270,  740 => 268,  731 => 262,  726 => 259,  724 => 258,  716 => 252,  711 => 250,  702 => 244,  698 => 242,  696 => 241,  693 => 240,  688 => 238,  683 => 236,  680 => 235,  677 => 234,  674 => 232,  670 => 230,  664 => 228,  662 => 227,  658 => 225,  647 => 220,  643 => 219,  636 => 215,  631 => 213,  627 => 212,  620 => 208,  615 => 206,  611 => 205,  607 => 203,  603 => 201,  597 => 199,  595 => 198,  590 => 196,  586 => 195,  579 => 191,  574 => 190,  570 => 188,  564 => 186,  562 => 185,  558 => 183,  551 => 181,  547 => 180,  542 => 179,  538 => 177,  531 => 175,  527 => 174,  524 => 172,  517 => 170,  513 => 169,  510 => 167,  503 => 165,  499 => 164,  496 => 162,  494 => 161,  490 => 159,  483 => 158,  479 => 157,  472 => 153,  466 => 150,  462 => 149,  458 => 148,  454 => 147,  446 => 146,  441 => 144,  437 => 143,  433 => 142,  429 => 141,  425 => 140,  420 => 137,  414 => 135,  412 => 134,  406 => 131,  402 => 130,  397 => 127,  391 => 125,  389 => 124,  386 => 123,  380 => 120,  377 => 119,  375 => 118,  370 => 116,  366 => 115,  363 => 114,  358 => 112,  355 => 111,  353 => 110,  349 => 109,  345 => 108,  341 => 107,  331 => 100,  323 => 99,  318 => 98,  316 => 97,  312 => 96,  307 => 95,  304 => 94,  302 => 93,  292 => 92,  287 => 90,  283 => 89,  279 => 88,  275 => 87,  271 => 86,  266 => 85,  263 => 84,  255 => 82,  252 => 81,  249 => 80,  247 => 79,  243 => 78,  239 => 77,  235 => 76,  231 => 75,  227 => 74,  223 => 73,  219 => 72,  215 => 71,  211 => 70,  207 => 68,  201 => 65,  197 => 64,  191 => 62,  185 => 61,  178 => 58,  176 => 57,  173 => 56,  171 => 55,  168 => 54,  161 => 52,  155 => 50,  153 => 49,  150 => 48,  148 => 47,  145 => 46,  140 => 44,  134 => 42,  132 => 41,  129 => 40,  124 => 38,  118 => 36,  116 => 35,  113 => 34,  107 => 32,  105 => 31,  102 => 30,  97 => 28,  91 => 26,  89 => 25,  86 => 24,  81 => 22,  78 => 21,  72 => 19,  66 => 17,  63 => 16,  61 => 15,  58 => 14,  56 => 13,  53 => 12,  48 => 10,  42 => 8,  40 => 7,  37 => 6,  34 => 5,  31 => 4,  28 => 3,);
    }
}
