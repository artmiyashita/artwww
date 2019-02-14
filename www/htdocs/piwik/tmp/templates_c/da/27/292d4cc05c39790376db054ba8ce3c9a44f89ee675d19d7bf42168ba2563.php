<?php

/* @CoreHome/_topBarHelloMenu.twig */
class __TwigTemplate_da27292d4cc05c39790376db054ba8ce3c9a44f89ee675d19d7bf42168ba2563 extends Twig_Template
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
        echo "<div id=\"topRightBar\">
    ";
        // line 2
        ob_start();
        // line 3
        echo "        ";
        if (array_key_exists("userAlias", $context)) {
            // line 4
            echo "            <strong>";
            echo twig_escape_filter($this->env, (isset($context["userAlias"]) ? $context["userAlias"] : $this->getContext($context, "userAlias")), "html", null, true);
            echo "</strong>
        ";
        } else {
            // line 6
            echo "            <strong>";
            echo twig_escape_filter($this->env, (isset($context["userLogin"]) ? $context["userLogin"] : $this->getContext($context, "userLogin")), "html", null, true);
            echo "</strong>
        ";
        }
        // line 8
        echo "    ";
        $context["helloAlias"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 9
        echo "    <span class=\"topBarElem\">";
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_HelloUser", trim((isset($context["helloAlias"]) ? $context["helloAlias"] : $this->getContext($context, "helloAlias")))));
        echo "</span>
    ";
        // line 10
        if (((isset($context["userLogin"]) ? $context["userLogin"] : $this->getContext($context, "userLogin")) != "anonymous")) {
            // line 11
            echo "        |
        ";
            // line 12
            if (array_key_exists("isAdminLayout", $context)) {
                // line 13
                echo "            <span class=\"topBarElem topBarElemActive\">";
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Settings")), "html", null, true);
                echo "</span>
        ";
            } else {
                // line 15
                echo "            <span class=\"topBarElem\"><a href='index.php?module=CoreAdminHome'>";
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Settings")), "html", null, true);
                echo "</a></span>
        ";
            }
            // line 17
            echo "    ";
        }
        // line 18
        echo "    | <span class=\"topBarElem\">
        ";
        // line 19
        if (((isset($context["userLogin"]) ? $context["userLogin"] : $this->getContext($context, "userLogin")) == "anonymous")) {
            // line 20
            echo "            <a href='index.php?module=";
            echo twig_escape_filter($this->env, (isset($context["loginModule"]) ? $context["loginModule"] : $this->getContext($context, "loginModule")), "html", null, true);
            echo "'>";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("Login_LogIn")), "html", null, true);
            echo "</a>
        ";
        } else {
            // line 22
            echo "            <a href='index.php?module=";
            echo twig_escape_filter($this->env, (isset($context["loginModule"]) ? $context["loginModule"] : $this->getContext($context, "loginModule")), "html", null, true);
            echo "&amp;action=logout'>";
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Logout")), "html", null, true);
            echo "</a>
        ";
        }
        // line 24
        echo "    </span>
</div>
";
    }

    public function getTemplateName()
    {
        return "@CoreHome/_topBarHelloMenu.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  90 => 24,  82 => 22,  69 => 18,  52 => 12,  39 => 8,  63 => 9,  59 => 8,  49 => 11,  33 => 6,  28 => 5,  24 => 3,  132 => 36,  113 => 30,  108 => 28,  104 => 27,  96 => 25,  92 => 24,  88 => 23,  79 => 21,  77 => 20,  70 => 15,  62 => 13,  46 => 9,  31 => 3,  27 => 4,  23 => 3,  19 => 1,  134 => 43,  131 => 42,  127 => 34,  124 => 33,  121 => 32,  114 => 20,  112 => 19,  107 => 16,  105 => 15,  100 => 26,  87 => 9,  84 => 22,  81 => 7,  74 => 20,  72 => 19,  68 => 44,  66 => 17,  60 => 15,  55 => 36,  53 => 33,  50 => 32,  41 => 28,  38 => 7,  36 => 26,  32 => 24,  30 => 6,  22 => 2,  56 => 12,  54 => 13,  51 => 10,  47 => 10,  45 => 30,  42 => 9,  40 => 5,  37 => 4,  34 => 3,  29 => 2,);
    }
}
