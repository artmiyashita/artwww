<?php

/* @UserSettings/index.twig */
class __TwigTemplate_0a96142fd688f33372da1385a203ad16be04ba7b27fa3002820a91af84b92c63 extends Twig_Template
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
        echo "<div id='leftcolumn'>
    <h2>";
        // line 2
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_BrowserFamilies")), "html", null, true);
        echo "</h2>
    ";
        // line 3
        echo (isset($context["dataTableBrowserType"]) ? $context["dataTableBrowserType"] : $this->getContext($context, "dataTableBrowserType"));
        echo "

    <h2>";
        // line 5
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_Browsers")), "html", null, true);
        echo "</h2>
    ";
        // line 6
        echo (isset($context["dataTableBrowser"]) ? $context["dataTableBrowser"] : $this->getContext($context, "dataTableBrowser"));
        echo "

    <h2>";
        // line 8
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Plugins")), "html", null, true);
        echo "</h2>
    ";
        // line 9
        echo (isset($context["dataTablePlugin"]) ? $context["dataTablePlugin"] : $this->getContext($context, "dataTablePlugin"));
        echo "
</div>

<div id='rightcolumn'>
    <h2>";
        // line 13
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_Configurations")), "html", null, true);
        echo "</h2>
    ";
        // line 14
        echo (isset($context["dataTableConfiguration"]) ? $context["dataTableConfiguration"] : $this->getContext($context, "dataTableConfiguration"));
        echo "

    <h2>";
        // line 16
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_OperatingSystems")), "html", null, true);
        echo "</h2>
    ";
        // line 17
        echo (isset($context["dataTableOS"]) ? $context["dataTableOS"] : $this->getContext($context, "dataTableOS"));
        echo "

    <h2>";
        // line 19
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_Resolutions")), "html", null, true);
        echo "</h2>
    ";
        // line 20
        echo (isset($context["dataTableResolution"]) ? $context["dataTableResolution"] : $this->getContext($context, "dataTableResolution"));
        echo "

    <h2>";
        // line 22
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_MobileVsDesktop")), "html", null, true);
        echo "</h2>
    ";
        // line 23
        echo (isset($context["dataTableMobileVsDesktop"]) ? $context["dataTableMobileVsDesktop"] : $this->getContext($context, "dataTableMobileVsDesktop"));
        echo "

    <h2>";
        // line 25
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("UserSettings_BrowserLanguage")), "html", null, true);
        echo "</h2>
    ";
        // line 26
        echo (isset($context["dataTableBrowserLanguage"]) ? $context["dataTableBrowserLanguage"] : $this->getContext($context, "dataTableBrowserLanguage"));
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "@UserSettings/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  91 => 26,  87 => 25,  82 => 23,  78 => 22,  73 => 20,  69 => 19,  64 => 17,  60 => 16,  55 => 14,  51 => 13,  44 => 9,  40 => 8,  35 => 6,  31 => 5,  26 => 3,  22 => 2,  19 => 1,);
    }
}
